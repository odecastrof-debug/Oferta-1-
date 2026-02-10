'use server';

/**
 * @fileOverview An AI agent that generates geographic insights about biblical locations or events.
 *
 * - generateGeographicInsights - A function that generates geographic insights.
 * - GenerateGeographicInsightsInput - The input type for the generateGeographicInsights function.
 * - GenerateGeographicInsightsOutput - The return type for the generateGeographicInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateGeographicInsightsInputSchema = z.object({
  locationOrEvent: z
    .string()
    .describe("The biblical location or event to generate insights for."),
});
export type GenerateGeographicInsightsInput = z.infer<
  typeof GenerateGeographicInsightsInputSchema
>;

const GenerateGeographicInsightsOutputSchema = z.object({
  insights: z.string().describe(
    'AI-generated insights about the geographical context, including topographical analysis and connections to related regions.'
  ),
});
export type GenerateGeographicInsightsOutput = z.infer<
  typeof GenerateGeographicInsightsOutputSchema
>;

export async function generateGeographicInsights(
  input: GenerateGeographicInsightsInput
): Promise<GenerateGeographicInsightsOutput> {
  return generateGeographicInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateGeographicInsightsPrompt',
  input: {schema: GenerateGeographicInsightsInputSchema},
  output: {schema: GenerateGeographicInsightsOutputSchema},
  prompt: `You are an AI assistant specialized in biblical geography. A user will provide you with a biblical location or event, and you will generate insightful information about its geographical context.

  Location or event: {{{locationOrEvent}}}

  Provide a topographical analysis of the location, explaining its physical features and how they influenced the events that took place there. Connect the location to related geographical regions and explain their historical and biblical significance.
  `,
});

const generateGeographicInsightsFlow = ai.defineFlow(
  {
    name: 'generateGeographicInsightsFlow',
    inputSchema: GenerateGeographicInsightsInputSchema,
    outputSchema: GenerateGeographicInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
