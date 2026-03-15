export default function Footer() {
    return (
        <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* Tengah: Copyright */}
                <div className="text-sm text-slate-500 dark:text-slate-400 font-mono flex items-center justify-center">
                    <div>
                        © {new Date().getFullYear()} — Agung Kresna. All rights reserved.
                    </div>
                </div>
        </footer>
    );
}