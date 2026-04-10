import HomePage from "@/features/home/page";
import { generatePersonSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export default function Page() {
  return (
    <>
      <StructuredData data={generatePersonSchema()} />
      <HomePage />
    </>
  );
}