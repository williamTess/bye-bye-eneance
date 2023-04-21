import React, { useRef, useState } from "react";
import { s } from "./style";
import { Link } from "../../components/link/Link";
import { useClickOutside } from "../../hooks/useClickOutside";
import Modale from "../../components/modale/Modale";

import images from "../../images/";

export const Home = () => {
  const [currentMeme, setCurrentMeme] = useState<string>("");
  const [currentDimension, setCurrentDimension] = useState<string>("");
  const ref: React.RefObject<HTMLInputElement> = useRef(null);
  useClickOutside(ref, () => setCurrentMeme(""));

  const Hyper = ({
    children,
    meme,
    form,
  }: {
    children: unknown;
    meme: string;
    form?: string;
  }) => {
    return (
      <Link
        onChange={setCurrentMeme}
        onChangeDimension={setCurrentDimension}
        img={meme}
        form={form}
      >
        {children}
      </Link>
    );
  };

  return (
    <s.Container>
      <s.Title>
        <b>
          Bien le bonjour mes chers compatriotes{" "}
          <Hyper meme={images.Patriot} form={"s"}>
            (meme patriotique)
          </Hyper>
        </b>
      </s.Title>
      <s.Part>
        Certains d'entre vous on du remarquer mon absence, d'autre pas du tout,
        mais vous devez tous vous dire "Tiens c'est bien silencieux et bien
        moins marrant depuis quelque temps"{" "}
        <Hyper meme={images.Coolife} form={"s"}>
          (meme demonstratif)
        </Hyper>
        . Effectivement je vous ai trahi mais cela n'est point de ma faute{" "}
        <Hyper meme={images.WilliamEarlyDeparture} form={"rv"}>
          (meme explicatif)
        </Hyper>
        .
      </s.Part>
      <s.Part>
        Un peu plus serieusement{" "}
        <Hyper meme={images.Seriously} form={"rh"}>
          (meme contextuel)
        </Hyper>
        , J'aimerai remercier énéance{" "}
        <Hyper meme={images.EneancePeople} form={"s"}>
          (meme présentation entreprise)
        </Hyper>{" "}
        pour tout ce que cette entreprise m'a apporter{" "}
        <Hyper meme={images.BossLate} form={"rv"}>
          (meme example)
        </Hyper>{" "}
        et pour toutes les épreuves qui m'ont permis de grandir{" "}
        <Hyper meme={images.WilliamWearShort} form={"rh"}>
          (meme example)
        </Hyper>
        .
      </s.Part>
      <s.Part>
        C'est avec tristesse que je quitte mon premier CDI{" "}
        <Hyper meme={images.No} form={"s"}>
          (meme de vérité absolue)
        </Hyper>{" "}
        qui m'a permis d'être en relation avec mes premiers clients{" "}
        <Hyper meme={images.BurgerKingProject} form={"s"}>
          (meme exemple)
        </Hyper>{" "}
        et mes premiers collegues(meme exemple)
      </s.Part>
      <s.Part>
        J'aurai passé de très bons moments à vos côtés que ce soit les pauses
        midi (meme commémoratif) ou les discussions entre 2/3 lignes de code
        (meme de developpement)
      </s.Part>
      <s.Part>
        Je vous souhaite à tous une très bonne continuation à tous ! Je vous
        aime tous très fort sauf un, à vous de deviner{" "}
        <Hyper meme={images.Olivier} form={"rv"}>
          (meme évident)
        </Hyper>
        !
      </s.Part>
      <s.Part>
        Maintenant voici une compilation de memes personnalisées, il se peut que
        vous ne compreniez pas si vous n'êtes pas la personne concernée:
      </s.Part>
      <s.Part>
        <Hyper meme={images.VincentLight} form={"rh"}>
          (Vincent M)
        </Hyper>
        <Hyper meme={images.PascalDesk} form={"rvl"}>
          (Pascalou)
        </Hyper>
        <Hyper meme={images.Mehdi} form={"s"}>
          (Medhi)
        </Hyper>
        <Hyper meme={images.Marco} form={"rvl"}>
          (Marco)
        </Hyper>
        <Hyper meme={images.Fatoumata} form={"rh"}>
          (Fatoumata)
        </Hyper>
        <Hyper meme={images.Arnaud} form={"s"}>
          (Arnaud pas le patron)
        </Hyper>
        <Hyper meme={images.Julien} form={"s"}>
          (Julien)
        </Hyper>
        <Hyper meme={images.Laura} form={"s"}>
          (Laura)
        </Hyper>
      </s.Part>

      {currentMeme && (
        <Modale
          refModale={ref}
          img={currentMeme}
          form={currentDimension}
        ></Modale>
      )}
    </s.Container>
  );
};
