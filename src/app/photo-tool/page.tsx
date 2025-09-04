
import { PhotoUploader } from "./photo-uploader";

export default function PhotoToolPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold md:text-5xl">Impactful Photo Selector</h1>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
          Upload your project photos, and our AI will help select the best one for our website—prioritizing quality and images of local beneficiaries.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <PhotoUploader />
      </div>
    </div>
  );
}
