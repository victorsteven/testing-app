import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layouts/index'

const Login = () => {

    return (
        <>

        <Head>
            <title>Segmed - Register</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
            <div className="text-base text-grey-darkest font-normal relative">
                <div className="h-2"></div>
                <div className="container mx-auto p-8">
                    <div className="mx-auto max-w-sm">
                        <div className="bg-white rounded shadow">
                            <div className="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
                                Register
                            </div>

                            <div className="bg-grey-lightest px-5 py-10">
                                <div className="mb-3">
                                    <input className="border w-full p-3" name="email" type="text" placeholder="Email" />
                                </div>
                                <div className="mb-6">
                                    <input className="border w-full p-3" name="password" type="password" placeholder="Password" />
                                </div>
                                <div className="flex">
                                    <button type="button" className="bg-primary hover:bg-primary-dark w-full p-4 text-sm text-white uppercase font-bold tracking-wider">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div className="border-t px-5 py-6">
                                <div className="flex justify-center">
                                    <Link href="/login">
                                        <a className="font-bold text-sm text-primary hover:text-primary-dark no-underline">
                                            Already have an account? Log in
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Login