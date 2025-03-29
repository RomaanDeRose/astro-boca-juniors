import { useState } from "react";
import { IDOLS } from "../assets/helpers/idols";
import "../assets/styles/Idols.css";
import "../assets/styles/Modal.css";

const ModalIdol = ({ idol, closeModal }) => {
  const { id, image, name } = idol;

  return (
    <div className={`modal modal-${id}`} onClick={closeModal}>
      <i class="bx bx-x"></i>
      <img
        src={image}
        alt={`Foto de ${name}`}
        decoding="async"
        loading="lazy"
      />
      <p>{name.map((n) => n + " ")}</p>
    </div>
  );
};

const Idol = ({ id, image, name, handleIdolClick }) => {
  return (
    <article className={`box box-${id}`} onClick={() => handleIdolClick(id)}>
      <img
        src={image}
        alt={`Foto de ${name}`}
        decoding="async"
        loading="lazy"
      />

      <div className="name-idol">
        <div>
          {name.map((idolName) => (
            <p key={idolName}>{idolName}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

function Idols() {
  const [showIdol, setShowIdol] = useState(false);
  const [selectedIdol, setSelectedIdol] = useState(null);

  const handleIdolClick = (id) => {
    const idolSelected = IDOLS.find((idol) => idol.id === id);
    setSelectedIdol(idolSelected);
    setShowIdol(true);
  };

  const handleCloseModal = (e) => {
    if (e.target.nodeName === "IMG") return;

    setShowIdol(false);
  };

  return (
    <section id="idols" className="section-idols">
      <h2>Idolos</h2>
      <div className="container-gallery">
        {IDOLS.map(({ id, image, name }) => (
          <Idol
            key={id}
            id={id}
            image={image}
            name={name}
            handleIdolClick={handleIdolClick}
          />
        ))}
      </div>
      {showIdol && (
        <ModalIdol idol={selectedIdol} closeModal={handleCloseModal} />
      )}
    </section>
  );
}

export default Idols;
