import SignupForm from "../../components/SignupForm"

const SignUp = () => {
    return (
        <div className='sign-up page'>
            <div className='sign-up-wrapper'>
                <h1 className='sign-up1'>
                    <span className='sign-up-txt-container'>
                        <p className='sign'>Sign</p>
                        <p className='sign'>Up</p>
                    </span>
                </h1>
            </div>
            <SignupForm />
        </div>
    )
}

export default SignUp