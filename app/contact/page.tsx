import Footer from "@/components/footer";
import Header from "@/components/header";
import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil | MCK Travel Agency",
  description:
    "Besoin d'informations sur nos services de tourisme médical ? Contactez nos conseillers pour un devis personnalisé, une consultation à distance ou des renseignements sur nos forfaits de soins internationaux.",
};
export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0 overflow-hidden">
          <b className="text-muted-foreground">Contactez nous</b>
          <h2 className="mt-3 text-5xl font-bold tracking-tight bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text">
            Laissez nous un message et nous y repondrons en moins de 24h.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            Nous serions ravis de vous entendre. Veuillez remplir ce formulaire
            ou nous envoyer un e-mail.
          </p>
          <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-12 *:hover:shadow-2xl *:py-4">
              <div className="px-4 rounded-lg">
                <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <MailIcon />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Email</h3>
                <p className="my-2.5 text-muted-foreground">
                  Notre équipe de soutient est là pour vous.
                </p>
                <Link
                  className="font-medium text-primary"
                  href="mailto:adresse@gmail.com"
                >
                  adresse@gmail.com
                </Link>
              </div>
              <div className="px-4 rounded-lg">
                <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <MessageCircle />
                </div>
                <h3 className="mt-6 font-semibold text-xl">
                  Messagerie instantannée
                </h3>
                <p className="my-2.5 text-muted-foreground">
                  Nous somme à 100% à votre disposition.
                </p>
                <Link
                  className="font-medium text-primary"
                  href="https://wa.me/+237677791701"
                  target="_blank"
                >
                  Ouvrir la discussion
                </Link>
              </div>
              <div className="px-4 rounded-lg">
                <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
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
              <div className="px-4 rounded-lg">
                <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <PhoneIcon />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Phone</h3>
                <p className="my-2.5 text-muted-foreground">
                  Lun-Ven de 8h à 17h.
                </p>
                <Link
                  className="font-medium text-primary"
                  href="tel:+237677791701"
                >
                  +237 6 77-79-17-01
                </Link>
              </div>
            </div>

            {/* Form */}
            <Card className="bg-accent shadow-lg relative transform lg:hover:rotate-2 lg:hover:scale-105 duration-500 mb-6 lg:mr-8">
              <BorderTrail
                style={{
                  boxShadow:
                    "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
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
                        J&apos;accepte les{" "}
                        <Link href="#" className="underline">
                          termes et conditions
                        </Link>
                        .
                      </Label>
                    </div>
                  </div>
                  <Button
                    className="mt-6 w-full text-white cursor-pointer"
                    size="lg"
                  >
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
