export default function AboutPage() {
  return (
    <main className="container p-5 md:p-10">
      <h1 className="font-bold text-3xl mb-4">About</h1>
      <p className="mb-2 text-muted-foreground">
        <strong>EHRCoder</strong> is a back-end medical coding assistant
        designed to streamline the documentation and coding process for healthcare
        providers. Our platform supports CPT, ICD-10, and Penny (non-billable)
        codes, helping ensure compliance and accuracy while reducing
        administrative burden.
      </p>
      <p className="mb-2 text-muted-foreground">
        By automating code generation and keeping up with the latest compliance
        bulletins, <strong>EHRCoder</strong> allows physicians and staff to
        focus more on patient care and less on paperwork. Whether codes are
        entered at the point of care or after the visit, our solution adapts to
        your workflow and supports both real-time and back-end coding.
      </p>
      <p className="mb-2 text-muted-foreground">
        Our value proposition is simple: relieve the documentation burden on
        physicians, save on payroll costs, increase patient throughput, and
        reduce burnout. With up-to-date compliance information and
        specialty-specific insights, we help private practices and clinics
        operate more efficiently and profitably.
      </p>
      <p className="mb-2 text-muted-foreground">
        <strong>Who benefits?</strong> Private practices and clinics of all
        specialties, especially those with high patient loads and significant
        documentation requirements.
      </p>
      <p className="mb-2 text-muted-foreground">
        <strong>Example workflow:</strong> A nurse documents vitals, a physician
        transcribes the exam and assessment (possibly via speech-to-text), and 
        <strong> EHRCoder</strong> generates the appropriate codes—so your
        team can move on to the next patient with confidence.
      </p>
      <p className="mb-2 text-muted-foreground">
        Our competitive edge is in providing the most current and up-to-date compliance and billing details,
        with a built-in bulletin for your ongoing review.
      </p>
    </main>
  );
}
