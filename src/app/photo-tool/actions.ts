"use server";

import { photoSelectionForWebsite } from "@/ai/flows/photo-selection-for-website";

export interface PhotoSelectionState {
  result?: {
    selectedPhotoDataUri: string;
    reason: string;
  } | null;
  error?: string | null;
}

export async function selectBestPhoto(
  prevState: PhotoSelectionState,
  formData: FormData
): Promise<PhotoSelectionState> {
  const photoDataUris = formData.getAll("photoDataUris") as string[];
  if (photoDataUris.length === 0) {
    return { error: "Please upload at least one photo." };
  }
  
  try {
    const result = await photoSelectionForWebsite({ photoDataUris });
    return { result };
  } catch (e: any) {
    console.error(e);
    return { error: `An error occurred: ${e.message}` };
  }
}
