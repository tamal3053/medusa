import clsx from "clsx"
import { useModal } from "../../../providers/modal"
import IconXMark from "../../Icons/XMark"

type ModalHeaderProps = {
  title?: string
}

const ModalHeader = ({ title }: ModalHeaderProps) => {
  const { closeModal } = useModal()

  return (
    <div
      className={clsx(
        "border-medusa-border-base dark:border-medusa-border-base-dark border-0 border-b border-solid py-1.5 px-2",
        "flex items-center justify-between"
      )}
    >
      <span
        className={clsx(
          "text-medusa-fg-base dark:text-medusa-fg-base-dark text-h2"
        )}
      >
        {title}
      </span>
      <button className="btn-clear cursor-pointer" onClick={() => closeModal()}>
        <IconXMark />
      </button>
    </div>
  )
}

export default ModalHeader
