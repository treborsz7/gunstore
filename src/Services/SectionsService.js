import React from 'react';

const baseUrl = 'http://localhost:3001/api/sections'

//import { Test } from './Header.styles';

export const GetSections = () => {
    return [{
        "id": "0",
        "description": "Ofertas",
        "position": "0",
        "enabled": "true",
        "tipe": "items"
    },
    {
        "id": "1",
        "description": "Cortas",
        "position": "1",
        "enabled": "true",
        "tipe": "items"
    },
    {
        "id": "2",
        "description": "Largas",
        "position": "2",
        "enabled": "true",
        "tipe": "items"
    },
    {
        "id": "3",
        "description": "Camping",
        "position": "3",
        "enabled": "true",
        "tipe": "items"
    },
    {
        "id": "4",
        "description": "Contact",
        "position": "4",
        "enabled": "true",
        "tipe": "contacts"
    }];

};

export const GetItemsForSection = (sectionId) => {
    return [{
        "id": "0",
        "sectionId": 0,
        "description": "Glock",
        "text": "",
        "Image": "/images/glock.webp",
        "enabled": "true",
        "price": "20000",
        "coint": "RD$",
        "ItemsCount": 0

    },
    {
        "id": "1",
        "sectionId": 0,
        "description": "Glock",
        "text": "",
        "Image": "/images/glock.webp",
        "enabled": "true",
        "price": "20000",
        "coint": "RD$",
        "ItemsCount": 0

    },
    {
        "id": "2",
        "sectionId": 0,
        "description": "Glock",
        "text": "",
        "Image": "/images/glock.webp",
        "enabled": "true",
        "price": "20000",
        "coint": "RD$",
        "ItemsCount": 0

    },
    {
        "id": "3",
        "sectionId": 0,
        "description": "Glock",
        "text": "",
        "Image": "/images/glock.webp",
        "enabled": "true",
        "price": "20000",
        "coint": "RD$",
        "ItemsCount": 0
    },
    {
        "id": "4",
        "sectionId": 0,
        "description": "Cargador P10",
        "text": "",
        "Image": "/images/cz-p10.webp",
        "enabled": "true",
        "price": "20000",
        "coint": "RD$",
        "ItemsCount": 0

    }, {
        "id": "5",
        "sectionId": 0,
        "description": "navaja",
        "text": "",
        "Image": "/images/navaja .webp",
        "enabled": "true",
        "price": "3000",
        "coint": "RD$",
        "ItemsCount": 0
    }, {
        "id": "6",
        "sectionId": 0,
        "description": "navaja",
        "text": "",
        "Image": "/images/navaja .webp",
        "enabled": "true",
        "price": "3000",
        "coint": "RD$",
        "ItemsCount": 0
    }, {
        "id": "7",
        "sectionId": 0,
        "description": "navaja",
        "text": "",
        "Image": "/images/navaja .webp",
        "enabled": "true",
        "price": "3000",
        "coint": "RD$",
        "ItemsCount": 0
    }, {
        "id": "8",
        "sectionId": 1,
        "description": "navaja",
        "text": "",
        "Image": "/images/navaja .webp",
        "enabled": "true",
        "price": "3000",
        "coint": "RD$",
        "ItemsCount": 0
    }, {
        "id": "9",
        "sectionId": 1,
        "description": "navaja",
        "text": "",
        "Image": "/images/navaja .webp",
        "enabled": "true",
        "price": "3000",
        "coint": "RD$",
        "ItemsCount": 0
    }, {
        "id": "10",
        "sectionId": 1,
        "description": "navaja",
        "text": "",
        "Image": "/images/navaja .webp",
        "enabled": "true",
        "price": "3000",
        "coint": "RD$",
        "ItemsCount": 0
    }, {
        "id": "11",
        "sectionId": 1,
        "description": "navaja",
        "text": "",
        "Image": "/images/navaja .webp",
        "enabled": "true",
        "price": "3000",
        "coint": "RD$",
        "ItemsCount": 0
    }].filter(x => x.sectionId == sectionId)
}

