"use client";

import { useFormState, useFormStatus } from "react-dom";
import { selectBestPhoto, type PhotoSelectionState } from "./actions";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, UploadCloud, CheckCircle, AlertTriangle } from "lucide-react";

const initialState: PhotoSelectionState = {
  result: null,
  error: null,
};

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={disabled || pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
        </>
      ) : (
        "Select Best Photo"
      )}
    </Button>
  );
}

export function PhotoUploader() {
  const [state, formAction] = useFormState(selectBestPhoto, initialState);
  const { toast } = useToast();
  const [photoDataUris, setPhotoDataUris] = useState<string[]>([]);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: state.error,
      });
    }
  }, [state, toast]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoDataUris([]);
    state.result = null;
    state.error = null;

    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length > 5) {
        toast({ variant: "destructive", title: "Too many files", description: "Please select up to 5 photos."});
        e.target.value = ''; // Reset file input
        return;
      }
      const dataUrisPromises = files.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target?.result) {
              resolve(event.target.result as string);
            } else {
              reject(new Error("Failed to read file."));
            }
          };
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      });
      try {
        const uris = await Promise.all(dataUrisPromises);
        setPhotoDataUris(uris);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error reading files",
          description: (error as Error).message,
        });
      }
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form action={formAction} className="space-y-6">
          {photoDataUris.map((uri, index) => (
            <input type="hidden" name="photoDataUris" value={uri} key={index} />
          ))}
          
          <label htmlFor="photo-upload" className="block text-sm font-medium text-foreground">Upload Photos (up to 5)</label>
          <Input id="photo-upload" type="file" multiple accept="image/*" onChange={handleFileChange} />

          {photoDataUris.length > 0 && (
            <div>
              <h3 className="text-lg font-medium font-headline mb-2">Selected Photos</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {photoDataUris.map((uri, index) => (
                  <div key={index} className="relative aspect-square">
                    <Image src={uri} alt={`Preview ${index + 1}`} fill className="rounded-md object-cover"/>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <SubmitButton disabled={photoDataUris.length === 0} />
        </form>

        {state.result && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="font-headline text-2xl font-bold text-center mb-4">AI Selection</h3>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-video">
                <Image
                  src={state.result.selectedPhotoDataUri}
                  alt="AI selected photo"
                  fill
                  className="rounded-lg object-contain border bg-secondary"
                />
              </div>
              <div className="flex items-start space-x-3 rounded-lg bg-secondary p-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Reasoning:</h4>
                  <p className="text-muted-foreground">{state.result.reason}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {state.error && !state.result && (
            <div className="mt-8 pt-6 border-t">
                <div className="flex items-center space-x-3 rounded-lg bg-destructive/10 p-4 text-destructive">
                    <AlertTriangle className="h-6 w-6 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold">Analysis Error</h4>
                        <p>{state.error}</p>
                    </div>
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
