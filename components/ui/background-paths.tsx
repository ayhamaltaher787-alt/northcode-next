"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.018}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

/**
 * Fixed full-page background with animated floating paths.
 * Uses the Northcode brand colours:
 *   – paths stroke: slate-navy  (text-[#1A4A6E])
 *   – tinted glass layers for depth
 */
export function BackgroundPaths() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
            style={{ color: "#1A4A6E" }}
        >
            {/* Subtle sage-teal gradient layer */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 900px 600px at 80% 20%, rgba(74,122,150,0.07) 0%, transparent 65%), " +
                        "radial-gradient(ellipse 600px 400px at 10% 80%, rgba(61,139,120,0.05) 0%, transparent 60%)",
                }}
            />
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}
