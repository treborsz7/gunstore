import axios from 'axios';
import { useRef } from 'react';
import React, { useState, useEffect, useMemo } from 'react';

import Section from '../Components/Admin/ProductSetUp/Product/Product';
import useAxios from './useAxios';
import { data } from 'jquery';

const sectionsBaseUrl = 'http://localhost:3001/api/sections/'
const productsBaseUrl = 'http://localhost:3001/api/products/'
const filesBaseUrl = 'http://localhost:3001/api/files/'

//import { Test } from './Header.styles';


// export const GetSections = async () => {
//     const carRef = useRef();

//     const { data, loading, error } = carRef.current = useAxios(sectionsBaseUrl);
//     // const cachedData = useMemo(() => data, [data]);

//     if (loading) {
//         return []
//     }

//     if (error) {
//         return []
//     }


//     return await data;

// };

// export const UserData = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get(sectionsBaseUrl);
//             setData(response.data);
//         };
//         fetchData();
//     }, []);
//     const cachedData = useMemo(() => data, [data]);
//     return data;
//     // Component rendering and interaction with cachedData
// };


let dat = [];
export const GetSections = async (refresh = false) => {

    if (refresh || dat.length <= 0) {
        const date = await axios.get(sectionsBaseUrl);
        dat = date.data;
    }
    return dat
};

let sections = []
export const GetSectionsTohome = async (refresh = false) => {

    if (refresh || dat.length <= 0) {
        const data = await axios.get(sectionsBaseUrl + "products");
        console.log(data)
        sections = data.data;
    }
    return sections
};

export const CreateSection = ({ description, check }) => {
    const data = { description, enabled: check }
    console.log(data)
    return axios.post(sectionsBaseUrl, data)
        .then(response => {
            console.log("response result", response)
            dat = [];
            GetSections();
            return response;
        }).catch(error => {
            console.log('fail')
        })
}

export const DeleteSection = (id) => {
    const data = { id }
    console.log("delete", id)
    return axios.delete(sectionsBaseUrl + id, data)
        .then(response => {
            // const section = response.data
            // console.log(section)
            //Sections = section;
            return response.data;
        }).catch(error => {
            console.log('fail')
        })
}

export const CreateProduct = (inputs) => {
    let data = {};
    let section = [];

    const keys = Object.keys(inputs);
    for (let index = 0; index < keys.length; index++) {

        const key = keys[index]
        const value = inputs[key];

        if (key === "description") {
            data["description"] = value

        }
        else if (key === "price")
            data["price"] = value
        else {
            if (value)
                section.push(key)
        }

    }
    data["sections"] = section;
    console.log(inputs)
    // const data = { description }
    //console.log(data)
    return axios.post(productsBaseUrl, data)
        .then(response => {
            console.log("response result", response)
            // const section = response.data
            // console.log(section)
            //Sections = section;
            return response;
        }).catch(error => {
            console.log('fail')
        })
}


export const EditProduct = (itemId, inputs) => {
    let data = {};
    let section = [];

    const keys = Object.keys(inputs);
    for (let index = 0; index < keys.length; index++) {

        const key = keys[index]
        const value = inputs[key];

        if (key === "description") {
            data["description"] = value

        }
        else {
            if (value)
                section.push(key)
        }

    }
    data["sections"] = section;
    // const data = { description }
    console.log(data)
    return axios.put(productsBaseUrl + itemId, data)
        .then(response => {
            console.log("response result", response)
            // const section = response.data
            // console.log(section)
            //Sections = section;
            return response.data;
        }).catch(error => {
            console.log('fail')
        })
}

let productos = [];
export const GetProduct = async (refresh = false) => {

    if (refresh || productos.length <= 0) {

        const date = await axios.get(productsBaseUrl);
        productos = date.data;


    }
    return productos;
    // const date = await axios.get(sectionsBaseUrl);
    // return axios.get(productsBaseUrl)

    //     .then(response => {
    //         console.log("response", response)

    //         //Sections = []
    //         //const sections =
    //         //Sections = sections;
    //         return response.data;
    //     }).catch(error => {
    //         console.log('fail')
    //     })

};


export const DeleteProduct = (id) => {
    const data = { id }
    return axios.delete(productsBaseUrl + id, data)
        .then(response => {

            return GetProduct(true);
        }).catch(error => {
            console.log('fail')
        })
}


export const UploadFile = (files) => {
    const data = { data: files }
    console.log(data)
    return axios.post(filesBaseUrl, data)
        .then(response => {
            console.log("response result", response)
            // const section = response.data
            // console.log(section)
            //Sections = section;
            return response;
        }).catch(error => {
            console.log('fail')
        })
}