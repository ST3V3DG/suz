import FooterSection from "@/components/footer";
import HeroHeader from "@/components/hero8-header";
import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (<>
        <HeroHeader />
            <div className="min-h-screen flex items-center justify-center py-16">
                <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
                    <b className="text-muted-foreground">Contactez nous</b>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                        Laissez nous un message et nous y repondrons en moins de 24h.
                    </h2>
                    <p className="mt-3 text-base sm:text-lg">
                        Nous serions ravis de vous entendre. Veuillez remplir ce formulaire ou nous envoyer un e-mail.
                    </p>
                    <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                            <div>
                                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                                    <MailIcon />
                                </div>
                                <h3 className="mt-6 font-semibold text-xl">Email</h3>
                                <p className="my-2.5 text-muted-foreground">
                                    Notre équipe de soutient est là pour vous.
                                </p>
                                <Link
                                    className="font-medium text-primary"
                                    href="mailto:akashmoradiya3444@gmail.com"
                                >
                                    akashmoradiya3444@gmail.com
                                </Link>
                            </div>
                            <div>
                                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                                    <MessageCircle />
                                </div>
                                <h3 className="mt-6 font-semibold text-xl">Messagerie instantannée</h3>
                                <p className="my-2.5 text-muted-foreground">
                                    Nous somme à 100% à votre disposition.
                                </p>
                                <Link className="font-medium text-primary" href="#">
                                    Ouvrir la discussion
                                </Link>
                            </div>
                            <div>
                                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                                    <MapPinIcon />
                                </div>
                                <h3 className="mt-6 font-semibold text-xl">Office</h3>
                                <p className="my-2.5 text-muted-foreground">
                                    Passez dans nos locaux.
                                </p>
                                <Link
                                    className="font-medium text-primary"
                                    href="https://map.google.com"
                                    target="_blank"
                                >
                                    100 Smith Street Collingwood <br /> VIC 3066 AU
                                </Link>
                            </div>
                            <div>
                                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                                    <PhoneIcon />
                                </div>
                                <h3 className="mt-6 font-semibold text-xl">Phone</h3>
                                <p className="my-2.5 text-muted-foreground">
                                    Lun-Ven de 8h à 17h.
                                </p>
                                <Link
                                    className="font-medium text-primary"
                                    href="tel:akashmoradiya3444@gmail.com"
                                >
                                    +237 6 00-00-00-00
                                </Link>
                            </div>
                        </div>

                        {/* Form */}
                        <Card className="bg-accent shadow-none relative">
                            <BorderTrail
                                style={{
                                boxShadow:
                                    '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                                }}
                                size={100}
                            />
                            <CardContent className="p-6 md:p-10">
                                <form>
                                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="firstName">Prénom(s)</Label>
                                            <Input
                                                placeholder="Prénom(s)"
                                                id="firstName"
                                                className="mt-1.5 bg-white h-11 shadow-none"
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="lastName">Nom(s)</Label>
                                            <Input
                                                placeholder="Nom(s)"
                                                id="lastName"
                                                className="mt-1.5 bg-white h-11 shadow-none"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                className="mt-1.5 bg-white h-11 shadow-none"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Message"
                                                className="mt-1.5 bg-white shadow-none"
                                                rows={6}
                                            />
                                        </div>
                                        <div className="col-span-2 flex items-center gap-2">
                                            <Checkbox id="acceptTerms" />
                                            <Label htmlFor="acceptTerms">
                                                J'accepte les {" "}
                                                <Link href="#" className="underline">
                                                    termes et conditions
                                                </Link>
                                                .
                                            </Label>
                                        </div>
                                    </div>
                                    <Button className="mt-6 w-full text-white cursor-pointer" size="lg">
                                        Envoyer
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
        </div>
        <FooterSection/>
        </>
    );
}
