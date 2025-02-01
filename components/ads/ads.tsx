"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { url } from "@/constant";
import { AdsWrapper } from "@/components/wrappers/ad-wrapper";

export const Ad1 = () => {
  return <AdsWrapper id="1194095967" />;
};

export const Ad2 = () => {
  return <AdsWrapper id="3396188676" />;
};

export const Ad3 = () => {
  return <AdsWrapper id="2667223060" />;
};

export const Ad4 = () => {
  return <AdsWrapper id="2326649587" />;
};

export const Ad5 = () => {
  return <AdsWrapper id="7169574856" />;
};

// export const OutBrain1 = () => {
//   const [open, setOpen] = useState(false);

//   const pathname = usePathname();

//   useEffect(() => {
//     setOpen(true);

//     return () => {
//       setOpen(false);
//     };
//   }, [pathname]);

//   if (!open) return;

//   return (
//     <div className="OUTBRAIN" data-src={url} data-widget-id="CRMB_2"></div>
//   );
// };

// export const OutBrain2 = () => {
//   const [open, setOpen] = useState(false);

//   const pathname = usePathname();

//   useEffect(() => {
//     setOpen(true);

//     return () => {
//       setOpen(false);
//     };
//   }, [pathname]);

//   if (!open) return;

//   return (
//     <div className="OUTBRAIN" data-src={url} data-widget-id="CRMB_1"></div>
//   );
// };

// export const OutBrain3 = () => {
//   const [open, setOpen] = useState(false);

//   const pathname = usePathname();

//   useEffect(() => {
//     setOpen(true);

//     return () => {
//       setOpen(false);
//     };
//   }, [pathname]);

//   if (!open) return;

//   return (
//     <div className="OUTBRAIN" data-src={url} data-widget-id="CRMB_3"></div>
//   );
// };
