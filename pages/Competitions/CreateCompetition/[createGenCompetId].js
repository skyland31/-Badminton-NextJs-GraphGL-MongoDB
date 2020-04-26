import React, { useState } from 'react'
import { useRouter } from 'next/router'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import apolloClient from '../../../apollo/apolloClient'
import Link from 'next/link'

const CREATE_GEN = gql`
mutation CREATE_GEN($id: ID!,$type:String!,$gen:String){
    createCompetition_gen(
        id : $id,
        type: $type,
        gen: $gen
  ){
        type
        gen 
        compet_id{
        id
        name
        }
  }
}

`




const CreateGens = () => {
    const route = useRouter();
    const genY = ["U9", "U11", "U13", "U15", "U17"];
    const genP = ["N", "S+", "S-", "P-", "P+C"];
    const [disableGenP, setDisableGenP] = useState(true)
    const [disableGenY, setDisableGenY] = useState(true)
    const [genInfo, setGen] = useState({
        id: "",
        type: "",
        gen: ""
    })
    const [success, setSuccess] = useState(false)
    const [createGen, { error, loading, data }] = useMutation(CREATE_GEN, {
        variables: { ...genInfo, id: route.query.createGenCompetId },
        onCompleted: data => {
            if (data) {
                setSuccess(true)

            }
        }
    })

    const handleSave = async e => {
        try {
            setGen({
                ...genInfo,
                [e.target.name]: e.target.value
            })
            if (success == true) {
                setSuccess(false)
            }
            e.preventDefault()
            await createGen()

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = e => {

        setGen({
            ...genInfo,
            [e.target.name]: e.target.value
        })
        console.log(genInfo);
    }

    const handleType = e => {
        if (e.target.value == "ประชาชน") {
            setDisableGenP(false)
            setDisableGenY(true)
        }
        else if (e.target.value == "เยาวชน") {
            setDisableGenP(true)
            setDisableGenY(false)
        }
        else if (e.target.value == null) {
            setDisableGenP(true)
            setDisableGenY(true)
        }
        setGen({
            ...genInfo,
            [e.target.name]: e.target.value
        })
        //console.log(genInfo);

    }

    const selectGen = () => {
        if (disableGenP && disableGenY) {
            return (<p>กรุณาเลือกประเภท</p>);
        }
        else if (disableGenP == false && disableGenY == true) {
            return (
                <select name="gen" onChange={handleChange}>
                    <option disabled={disableGenY} value={null}>เลือกรุ่น</option>
                    {genP.map(prod => (
                        <option disabled={disableGenP} value={prod}>{prod}</option>
                    ))}
                </select>
            )
        }
        else {
            return (
                <select name="gen" defaultValue="เลือกรุ่น" onChange={handleChange}>
                    <option disabled={disableGenY} value={null}>เลือกรุ่น</option>
                    {genY.map(prod => (
                        <option disabled={disableGenY} value={prod}>{prod}</option>
                    ))}
                </select>
            )
        }
    }

    return (
        <div style={{ margin: 80 }}>
            <form onSubmit={handleSave}>
                <input type="text" name="id" value={route.query.createGenCompetId} hidden={true} />
                <select name="type" onChange={handleType}>
                    <option value={null}>กรุณาเลือก</option>
                    <option value="ประชาชน">ประชาชน</option>
                    <option value="เยาวชน">เยาวชน</option>
                </select>
                {selectGen()}
                <button type="submit" style={{ margin: '5px', padding: '18px' }}>บันทึก</button>
            </form>
            <div>
                {success && <p>Success for Create Gen {data.createCompetition_gen.gen}. You Can Create Gen again or <Link href="../../Competitions">Come back Home</Link></p>}
            </div>
        </div >
    )
}
export default apolloClient(CreateGens)
