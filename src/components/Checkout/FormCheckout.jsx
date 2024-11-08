const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form onSubmit={handleSubmitForm} className="form-checkout" >
            <h2>Checkout</h2>
            <div className="content-input">
                <label htmlFor="fullname" className="label">Nombre completo: </label>
                <input type="text" name="fullname" id="fullname" value={dataForm.fullname} onChange={handleChangeInput} required />
            </div>

            <div className="content-input">
                <label htmlFor="phone" className="label">Telefono:</label>
                <input type="number" name="phone" id="phone" value={dataForm.phone} onChange={handleChangeInput} required />
            </div>

            <div className="content-input">
                <label htmlFor="email" className="label">Email:</label>
                <input type="email" name="email" id="email" value={dataForm.email} onChange={handleChangeInput} required />
            </div>

            <div className="content-input">
                <label htmlFor="repeatEmail" className="label">Repetir Email</label>
                <input type="email" name="repeatEmail" id="repeatEmail" value={dataForm.repeatEmail} onChange={handleChangeInput} required />
            </div>
            <button type="submit" className="button-send-order">Enviar orden</button>
        </form>
    )
}
export default FormCheckout