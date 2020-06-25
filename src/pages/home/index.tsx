import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import InputMask from "react-input-mask"
import { toast } from "react-toastify"
import { MdError } from "react-icons/md"

import API from "../../services/api"
import Modal from "../../components/modal"

import { HomeStyles } from "./styles"
import Loader from "../../assets/animations/loaderIcon.svg"

type FormData = {
  cpf: string
  uf: string
  birthday: string
  value: string
  months: string
}

const errorMessage = (message: string) => (
  <>
    <p className="errorMessage">
      <MdError className="iconError" />
      {message}
    </p>
  </>
)

const Home: React.FC = () => {
  const { register, errors, control, reset, handleSubmit } = useForm<FormData>({
      mode: "onChange",
    }),
    [isLoading, setIsLoading] = useState<boolean>(false),
    [simulate, setSimulate] = useState<any>()

  const onSubmit = handleSubmit(async (data: FormData) => {
    setIsLoading(true)
    await API.post("/simulate", {
      user: {
        cpf: data.cpf,
        uf: data.uf,
        birthday: data.birthday,
      },
      loan: {
        valueRequired: data.value,
        month_quant: data.months,
      },
    })
      .then((resp) => {
        setIsLoading(false)
        setSimulate(resp.data)
        reset({
          cpf: "",
          uf: "",
          birthday: "",
          value: "",
          months: "",
        })
      })
      .catch((e) => {
        setIsLoading(false)
        toast.error("Informações incorretas!")
        reset({
          cpf: "",
          uf: "",
          birthday: "",
          value: "",
          months: "",
        })
      })
  })

  return (
    <HomeStyles className="mt-3">
      <h1>Simule e solicite o seu empréstimo</h1>
      <h3>Preencha o formulário abaixo para simular</h3>
      <h1>{process.env.API_URL}</h1>

      <div className="containerForm">
        <form onSubmit={onSubmit}>
          <Controller
            as={InputMask}
            control={control}
            mask="999.999.999-99"
            name="cpf"
            placeholder="CPF"
            rules={{ required: true }}
          />
          {errors.cpf && errorMessage("Campo Obrigatório")}

          <select
            name="uf"
            defaultValue={""}
            ref={register({ required: true })}
          >
            <option value="" disabled>
              UF
            </option>
            <option value="MG">Minas Gerais</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="ES">Espirito Santo</option>
          </select>
          {errors.uf && errorMessage("Campo Obrigatório")}

          <input
            type="date"
            name="birthday"
            ref={register({ required: true })}
          />
          {errors.birthday && errorMessage("Campo Obrigatório")}

          <input
            placeholder="VALOR REQUERIDO"
            type="number"
            name="value"
            ref={register({
              required: true,
              min: 50000,
            })}
          />
          {errors.value &&
            errors.value.type === "min" &&
            errorMessage("Valor mínimo de R$50000,00")}

          {errors.value && errorMessage("Campo Obrigatório")}

          <input
            placeholder="MESES PARA PAGAR"
            type="number"
            name="months"
            ref={register({ required: true, min: 1, max: 360 })}
          />

          {errors.months &&
            errors.months.type === "min" &&
            errorMessage("Tempo mínimo é: 1 Mês")}
          {errors.months &&
            errors.months.type === "max" &&
            errorMessage("Tempo máximo é: 360 Meses")}

          {errors.months && errorMessage("Campo Obrigatório")}

          <button
            className="bntSubmit mt-3"
            type="submit"
            disabled={isLoading ? true : false}
          >
            {isLoading ? <img src={Loader} alt="loadingIcon" /> : "Simular"}
          </button>
        </form>
      </div>

      {simulate && <Modal data={simulate} />}
    </HomeStyles>
  )
}

export default Home
