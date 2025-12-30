
"use client";



export function LightMeshBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none block dark:hidden bg-white/50">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {/* Blob 1: Green */}
                <div
                    className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    style={{
                        backgroundColor: "#1DBF73"
                    }}
                />

                {/* Blob 2: Emerald */}
                <div
                    className="absolute -bottom-[10%] -right-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    style={{
                        backgroundColor: "#10B981"
                    }}
                />

                {/* Blob 3: Pink/White accent */}
                <div
                    className="absolute top-[20%] left-[30%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    style={{
                        backgroundColor: "#A7F3D0"
                    }}
                />
            </div>
        </div>
    );
}
