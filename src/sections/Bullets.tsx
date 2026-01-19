import type { BulletsProps } from "../types/BulletsProps";
import Container from "../components/Container";

export default function Bullets({ title, bullets, paragraph }: BulletsProps) {

  return (
    <div
    className="w-full bg-secondary !py-6 md:!py-10"
  >
    <Container>
        <div className="flex flex-col">
          <div className="flex flex-col w-full">
            <h1 className="apple-garamond header-2 !text-primary whitespace-pre-line">{title}</h1>
            <ul className="list-disc list-inside">
              {bullets.map((bullet, index) => (
                <li key={index} className="body-large !mt-3 whitespace-pre-line">{bullet}</li>
              ))}
            </ul>
            {paragraph && <p className="body-large !mt-4 whitespace-pre-line">{paragraph}</p>}
          </div>
        </div>
    </Container>
    </div>
  );
}