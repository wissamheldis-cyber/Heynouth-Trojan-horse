"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

type SmsSubscribeModalProps = {
    isOpen: boolean;
    onClose: () => void;
    shopSlug: string;
    shopName: string;
};

export default function SmsSubscribeModal({ isOpen, onClose, shopSlug, shopName }: SmsSubscribeModalProps) {
    const [phone, setPhone] = useState("");
    const [marketing, setMarketing] = useState(false);
    const [updates, setUpdates] = useState(true); // Required
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!updates) {
            setErrorMessage("Veuillez accepter de recevoir les mises à jour.");
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/sms-subscriptions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    shopSlug,
                    phoneRaw: phone,
                    optInUpdates: updates,
                    optInMarketing: marketing,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Une erreur est survenue.");
            }

            setStatus("success");
            // Optional: Close after delay or let user close
        } catch (err: any) {
            console.error(err);
            setStatus("error");
            setErrorMessage(err.message || "Erreur de connexion.");
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
            onClick={(e) => {
                e.stopPropagation();
                // Only close if not loading? Or always allowed.
                if (status !== 'loading') onClose();
            }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Gradient */}
                <div className="h-2 w-full bg-gradient-to-r from-brand-green to-brand-yellow" />

                <div className="p-6">
                    {status === "success" ? (
                        <div className="text-center py-8 space-y-4">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h3 className="text-xl font-black text-gray-900">C’est noté ! ✅</h3>
                            <p className="text-sm text-gray-600">
                                Vous serez prévenu par SMS dès la prochaine mise à jour de l'offre de <strong>{shopName}</strong>.
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-4 w-full rounded-xl bg-gray-100 py-3 font-bold text-gray-800 hover:bg-gray-200 transition-colors"
                            >
                                Fermer
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6 text-center">
                                <h3 className="text-xl font-black text-gray-900">Renseignez votre numéro</h3>
                                <p className="text-sm text-gray-500 mt-1">Pour recevoir l'offre du jour en avant-première.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="phone" className="sr-only">Numéro de téléphone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="06 12 34 56 78"
                                        disabled={status === "loading"}
                                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-lg font-medium text-center placeholder-gray-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div className="space-y-3 pt-2">
                                    {/* Marketing Checkbox (Optional) */}
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={marketing}
                                                onChange={(e) => setMarketing(e.target.checked)}
                                                disabled={status === "loading"}
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all checked:border-brand-green checked:bg-brand-green focus:ring-2 focus:ring-brand-green/20"
                                            />
                                            <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-xs text-gray-600 leading-snug select-none group-hover:text-gray-900 transition-colors">
                                            J’accepte de recevoir des offres commerciales et promotions du commerçant (facultatif)
                                        </span>
                                    </label>

                                    {/* Updates Checkbox (required) */}
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={updates}
                                                onChange={(e) => setUpdates(e.target.checked)}
                                                disabled={status === "loading"}
                                                // Using required might block native submit, manual validation is better for UX feedback
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all checked:border-brand-green checked:bg-brand-green focus:ring-2 focus:ring-brand-green/20"
                                            />
                                            <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-xs text-gray-600 leading-snug select-none group-hover:text-gray-900 transition-colors">
                                            Je souhaite recevoir uniquement les mises à jour de l’offre du jour <span className="text-red-500">*</span>
                                        </span>
                                    </label>
                                </div>

                                {/* Error Message */}
                                {errorMessage && (
                                    <div className="text-red-500 text-xs font-semibold text-center bg-red-50 p-2 rounded-lg">
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Legal Text */}
                                <p className="text-[10px] text-gray-400 text-center leading-tight px-2">
                                    Vous pouvez vous désinscrire à tout moment. En validant, vous acceptez notre <a href="/legal" className="underline hover:text-gray-600">politique de confidentialité</a>.
                                </p>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full rounded-xl bg-brand-green py-3.5 font-bold text-white shadow-lg shadow-brand-green/30 hover:bg-[#1a4a1c] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            <span>Traitement...</span>
                                        </>
                                    ) : (
                                        "Être prévenu"
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
