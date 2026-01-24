export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="flex justify-center items-center mt-auto border-black/10 border-t h-[40px] px-5 text-sm text-muted-foreground">
      © {currentYear} ITED Technology LTD. All rights reserved.
    </div>
  );
}
