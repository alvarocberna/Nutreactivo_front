import { SectionDivider } from "@/shared/components/section-divider";
import { StepsOverview } from "./components/steps-overview";
import "../../app/globals.css";
import "./style.css";

export function PreviewOnline() {
  return (
    <>
      <SectionDivider label="Consulta online" />
      <StepsOverview />
    </>
  )
}
