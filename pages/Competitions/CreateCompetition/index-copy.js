// import React, { useState } from 'react'
// import { useMutation } from '@apollo/react-hooks'
// import gql from 'graphql-tag'
// import apolloClient from '../../apollo/apolloClient'
// import Link from 'next/link'
// const CREATE_COMPETITION = gql`
// mutation CREATE_COMPETITION($name: String!, $detail: String!, $place: String!,$price: String!,$compet_start: String!,$compet_end: String!,$start: String!,$end: String!,$pay_end: String!) {
//   createCompetition(
//     name: $name,
//     detail: $detail,
//     place: $place,
//     price: $price,
//     compet_start: $compet_start,
//     compet_end: $compet_end
//     start: $start,
//     end: $end,
//     pay_end: $pay_end,
//   ){
//         id
//         name
//         detail
//         place
//         price
//         compet_start
//         compet_end
//         start
//         end
//         pay_end
//   }
// }`




// const Create = () => {
//     const [competitionInfo, setCompetition] = useState({
//         name: "",
//         detail: "",
//         place: "",
//         price: "",
//         compet_start: "",
//         compet_end: "",
//         start: "",
//         end: "",
//         pay_end: "",
//     })
//     const [success, setSuccess] = useState(false);


//     // const [competGenInfo, setcompetGenInfo] = useState({
//     //     id: "",
//     //     type: "",
//     //     gen: "",
//     // })
//     const [createCompetition, { loading, error }] = useMutation(CREATE_COMPETITION, {
//         variables: { ...competitionInfo },
//         onCompleted: data => {
//             if (data) {
//                 setSuccess(true);
//                 setCompetition({
//                     name: "",
//                     detail: "",
//                     place: "",
//                     price: "",
//                     compet_start: "",
//                     compet_end: "",
//                     start: "",
//                     end: "",
//                     pay_end: "",
//                 })
//             }
//         }
//     })
//     const handleSubmit = async e => {
//         try {
//             e.preventDefault()
//             await createCompetition()

//         } catch (error) {
//             console.log(error);
//         }
//     }
//     const handleChange = e => {
//         setCompetition({
//             ...competitionInfo,
//             [e.target.name]: e.target.value
//         })
//     }
//     return (
//         <div style={{ margin: 80 }}>
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder='Title Competition' onChange={handleChange} /><br /><br />
//                 <textarea type="input" name="detail" placeholder='รายละเอียด' onChange={handleChange} /><br /><br />
//                 <input type="text" name="start" placeholder='วันเปิดรับสมัคร' onChange={handleChange} /><br /><br />
//                 <input type="text" name="end" placeholder='วันสิ้นสุดรับสมัคร ' onChange={handleChange} /><br /><br />
//                 <input type="text" name="compet_start" placeholder='วันเริ่มการแข่งขัน' onChange={handleChange} /><br /><br />
//                 <input type="text" name="compet_end" placeholder='วันสิ้นสุดการแข่งขัน' onChange={handleChange} /><br /><br />
//                 <input type="number" name="price" placeholder='ค่าสมัคร' onChange={handleChange} /><br /><br />
//                 <input type="text" name="pay_end" placeholder='วันสุดท้ายการจ่ายเงิน' onChange={handleChange} /><br /><br />
//                 <input type="text" name="place" placeholder='สถานที่' onChange={handleChange} /><br /><br />
//                 <button type="submit" style={{ margin: '5px', padding: '18px' }} onChange={handleChange} disabled={loading}>สร้างการแข่งขัน Badminton</button>
//             </form>
//             <div>
//                 {success && <p>You successfully Create Competitions,please check Menu <Link href=""><a >Competitions.</a></Link></p>}

//                 {error && <p style={{ color: 'red' }}>{error.graphQLErrors[0].message}</p>}
//             </div>
//         </div >
//     )
// }

// export default apolloClient(Create);
