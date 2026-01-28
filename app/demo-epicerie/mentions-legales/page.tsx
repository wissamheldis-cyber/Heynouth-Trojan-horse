import Link from "next/link";

export default function LegalPage() {
    return (
        <main className="min-h-screen w-full bg-brand-paper px-6 py-10 sm:py-16">
            <div className="mx-auto w-full max-w-[430px]">
                <div className="mb-8">
                    <Link
                        href="/demo-epicerie"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-ink shadow-sm transition hover:bg-white/80"
                    >
                        ← Retour au magasin
                    </Link>
                </div>

                <div className="rounded-[42px] bg-white p-6 shadow-soft sm:p-8">
                    <h1 className="mb-8 text-2xl font-black text-brand-green">
                        Mentions légales & Confidentialité
                    </h1>

                    <div className="space-y-8 text-sm leading-relaxed text-slate-600">
                        <section>
                            <h2 className="mb-2 font-bold text-brand-ink">1. Éditeur du site</h2>
                            <p>
                                Le site est édité par <strong>[Nom de l'entreprise]</strong>.<br />
                                Siège social : [Adresse complète]<br />
                                SIRET : [Numéro SIRET]<br />
                                Directeur de la publication : [Nom du directeur]<br />
                                Contact : <a href="mailto:contact@hey.com" className="underline">contact@hey.com</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-2 font-bold text-brand-ink">2. Hébergement</h2>
                            <p>
                                Ce site est hébergé par <strong>Vercel Inc.</strong><br />
                                340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-2 font-bold text-brand-ink">3. Données personnelles</h2>
                            <p>
                                Conformément au RGPD, vous disposez d’un droit d’accès, de modification et de suppression de vos données.
                                Pour exercer ce droit, contactez-nous par email.
                            </p>
                            <p className="mt-2">
                                Aucune donnée n'est vendue à des tiers. Les informations collectées (téléphone, nom) servent uniquement au traitement de vos commandes.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-2 font-bold text-brand-ink">4. Cookies</h2>
                            <p>
                                Ce site utilise uniquement des cookies techniques essentiels au bon fonctionnement. Aucun traceur publicitaire n'est installé.
                            </p>
                        </section>
                    </div>

                    <div className="mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
                        Dernière mise à jour : Janvier 2026
                    </div>
                </div>
            </div>
        </main>
    );
}
