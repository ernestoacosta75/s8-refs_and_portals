import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        open = () => {
            if (dialog.current) {
                dialog.current.showModal();
            }
        }
    });
    return (<dialog ref={dialog} className="result-modal" open>
        <h2>You <strong>{result}</strong></h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>);
});

export default ResultModal;