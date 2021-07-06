import './PokeDetailsModal.css';

const PokeDetailsModal = ({ handleClose, show, url }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const showHideModal = show ? "modal-main display-block" : "modal-main display-none";

    return (
        <>
            <div className={showHideClassName}></div>
            <section className={showHideModal}>
                <p>{url}</p>
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>

        </>
    );
};

export default PokeDetailsModal;