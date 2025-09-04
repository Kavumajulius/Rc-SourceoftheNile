'use server';
/**
 * @fileOverview An AI tool to analyze uploaded photos, selecting the highest quality images that prominently feature local beneficiaries of our projects
 *
 * - photoSelectionForWebsite - A function that handles the photo selection process.
 * - PhotoSelectionForWebsiteInput - The input type for the photoSelectionForWebsite function.
 * - PhotoSelectionForWebsiteOutput - The return type for the photoSelectionForWebsite function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PhotoSelectionForWebsiteInputSchema = z.object({
  photoDataUris: z
    .array(z.string())
    .describe(
      "An array of photos, as data URIs that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type PhotoSelectionForWebsiteInput = z.infer<typeof PhotoSelectionForWebsiteInputSchema>;

const PhotoSelectionForWebsiteOutputSchema = z.object({
  selectedPhotoDataUri: z
    .string()
    .describe('The data URI of the selected photo with the highest quality and relevance.'),
  reason: z.string().describe('The reason for selecting this photo.'),
});

export type PhotoSelectionForWebsiteOutput = z.infer<typeof PhotoSelectionForWebsiteOutputSchema>;

export async function photoSelectionForWebsite(
  input: PhotoSelectionForWebsiteInput
): Promise<PhotoSelectionForWebsiteOutput> {
  return photoSelectionForWebsiteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'photoSelectionForWebsitePrompt',
  input: {schema: PhotoSelectionForWebsiteInputSchema},
  output: {schema: PhotoSelectionForWebsiteOutputSchema},
  prompt: `You are an AI assistant specialized in selecting the best photo for a website from a collection of uploaded photos.

You will review each photo and select the one that:
1. Has the highest visual quality (clear, well-composed, good lighting).
2. Prominently features local people who are beneficiaries of club projects.
3. Best represents the impact and mission of the organization.

Photos:
{{#each photoDataUris}}
  - {{media url=this}}
{{/each}}

Based on these criteria, select the best photo and provide a reason for your selection.
`,
});

const photoSelectionForWebsiteFlow = ai.defineFlow(
  {
    name: 'photoSelectionForWebsiteFlow',
    inputSchema: PhotoSelectionForWebsiteInputSchema,
    outputSchema: PhotoSelectionForWebsiteOutputSchema,
  },
  async input => {
    if (!input.photoDataUris || input.photoDataUris.length === 0) {
      throw new Error('No photos provided.');
    }

    const {output} = await prompt(input);
    return output!;
  }
);
