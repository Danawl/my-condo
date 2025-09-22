'use client'

export default function Footer() {
    return (
      <footer className="bg-[#a89c91] text-white py-6 mt-12 text-center">
        <span className="font-semibold">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </footer>
    );
  }