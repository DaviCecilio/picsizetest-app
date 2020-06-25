import React, { useState } from "react"
import Modal from "react-modal"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import moment from "moment"

import API from "../../services/api"
import ModalStyles from "./styles"
import Loader from "../../assets/animations/loaderIcon.svg"

moment().format("L")

const customModal: any = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: 0,
  },
}

interface IProps {
  data: {
    initialValue: number
    month_quant: number
    interests: number
    monthValue: number
    totalValue: number
    id?: number
  }
}

const ModalComponent = (props: IProps) => {
  const [isShow, setIsShow] = useState<boolean>(true),
    [isLoading, setIsLoading] = useState<boolean>(false)

  function closeModal() {
    setIsShow(false)
  }

  async function requestedLoan() {
    setIsLoading(true)
    await API.put(`/simulate/${props.data.id}`)
      .then((resp) => {
        setIsLoading(false)
        toast.success(`${resp.data.message}`, {
          autoClose: 2500,
          onClose: () => window.location.reload(false),
        })
        closeModal()
      })
      .catch((e) => {
        setIsLoading(false)
        toast.error("Algo deu errado!", {
          autoClose: 2500,
          onClose: () => window.location.reload(false),
        })
        closeModal()
      })
  }

  let rows = []
  const parcels = props.data.month_quant <= 3 ? props.data.month_quant : 3

  for (let i = 1; i <= parcels; i++) {
    rows.push({
      id: i,
      date: moment().add(i, "months").calendar(),
    })
  }

  return (
    <Modal
      isOpen={isShow}
      style={customModal}
      ariaHideApp={false}
      contentLabel="Request Loan"
    >
      {console.log(">>>show", isShow)}
      <ModalStyles>
        <h2 className="titleModal">
          Veja a simulação para o seu empréstimo antes de efetivar{" "}
        </h2>
        <div className="containerRequest">
          <div className="wrapperInfos">
            <div className="itemInfo">
              <p className="subTitleModal">VALOR REQUERIDO:</p>
              <h3>R$ {props.data.initialValue}</h3>
            </div>

            <div className="itemInfo">
              <p className="subTitleModal">TAXA DE JUROS:</p>
              <h3>{(props.data.interests * 100).toFixed(2)} %</h3>
            </div>

            <div className="itemInfo">
              <p className="subTitleModal">PAGAR EM:</p>
              <h3>{props.data.month_quant} Meses</h3>
            </div>
          </div>

          <div className="wrapperValues">
            <p className="subTitleModal">PROJEÇÃO DAS PARCELAS:</p>

            <div className="tableValues">
              {rows.map((i) => (
                <div key={i.id} className="itemValues">
                  <p>{i.date}</p>
                  <p>R$ {props.data.monthValue.toFixed(2)}</p>
                </div>
              ))}

              {props.data.month_quant > 3 ? (
                <>
                  <div className="moreParcels">
                    <p>...+{props.data.month_quant - 4} parcelas</p>
                  </div>
                  <div className="itemValues">
                    <p>
                      {moment()
                        .add(props.data.month_quant, "months")
                        .calendar()}
                    </p>
                    <p>R$ {props.data.monthValue.toFixed(2)}</p>
                  </div>
                </>
              ) : null}

              <div className="itemValues totalValue">
                <p>TOTAL: </p>
                <h3>R$ {props.data.totalValue.toFixed(2)}</h3>
              </div>
            </div>
          </div>

          <div className="alignCenter">
            <button
              type="button"
              className="btnRequested font-white"
              onClick={requestedLoan}
            >
              {isLoading ? (
                <img src={Loader} alt="loadingIcon" />
              ) : (
                "EFETIVAR O EMPRÉSTIMO"
              )}
            </button>
            <button
              type="button"
              className="btnClose font-white"
              onClick={() => window.location.reload(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </ModalStyles>
    </Modal>
  )
}

export default ModalComponent
