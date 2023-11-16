interface PatternProps {
  className?: string;
}

export function LoginPattern({ className }: PatternProps) {
  return (
    <svg className={className} width="1440" height="1200" viewBox="0 0 1440 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="1346" cy="984" rx="544" ry="473" fill="#FCBF02" />
      <ellipse cx="90" cy="311" rx="544" ry="473" fill="#1A91D0" />
      <path d="M0.5 784L310.104 1210H-309.104L0.5 784Z" fill="#1A91D0" />
      <path d="M1020.75 233.454L1451.67 -69.2605L1441.72 549.868L1020.75 233.454Z" fill="#FCBF02" />
    </svg>
  );
}

export function LoginPatternLeft({ className }: PatternProps) {
  return (
    <svg className={className} width="634" height="1200" viewBox="0 0 634 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M90 784C390.443 784 634 572.231 634 311C634 49.7693 390.443 -162 90 -162C-210.443 -162 -454 49.7693 -454 311C-454 572.231 -210.443 784 90 784Z" fill="#1A91D0" />
      <path d="M0.5 784L310.104 1210H-309.104L0.5 784Z" fill="#1A91D0" />
    </svg>
  );
}

export function LoginPatternRight({ className }: PatternProps) {
  return (
    <svg className={className} width="638" height="1200" viewBox="0 0 638 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M544 1457C844.443 1457 1088 1245.23 1088 984C1088 722.769 844.443 511 544 511C243.557 511 0 722.769 0 984C0 1245.23 243.557 1457 544 1457Z" fill="#FCBF02" />
      <path d="M218.75 233.454L649.67 -69.2607L639.72 549.868L218.75 233.454Z" fill="#FCBF02" />
    </svg>
  );
}

