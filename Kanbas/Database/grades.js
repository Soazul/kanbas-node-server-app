const grades = [
    {
        "_id": "1",
        "student": "123",
        "assignment": "A101",
        "grade": "27"
    },
    {
        "_id": "2",
        "student": "234",
        "assignment": "A101",
        "grade": "25"
    },
    {
        "_id": "3",
        "student": "345",
        "assignment": "A101",
        "grade": "20"
    },
    {
        "_id": "4",
        "student": "456",
        "assignment": "A101",
        "grade": "25"
    },
    {
        "_id": "5",
        "student": "567",
        "assignment": "A101",
        "grade": "20"
    },
    {
        "_id": "4",
        "student": "123",
        "assignment": "A102",
        "grade": "31"
    },
    {
        "_id": "5",
        "student": "234",
        "assignment": "A102",
        "grade": "35"
    },
    {
        "_id": "6",
        "student": "345",
        "assignment": "A102",
        "grade": "40"
    },
    {
        "_id": "7",
        "student": "456",
        "assignment": "A102",
        "grade": "35"
    },
    {
        "_id": "8",
        "student": "567",
        "assignment": "A102",
        "grade": "40"
    },
    {
        "_id": "9",
        "student": "123",
        "assignment": "A103",
        "grade": "55"
    },
    {
        "_id": "10",
        "student": "234",
        "assignment": "A103",
        "grade": "60"
    },
    {
        "_id": "11",
        "student": "345",
        "assignment": "A103",
        "grade": "65"
    },
    {
        "_id": "12",
        "student": "456",
        "assignment": "A103",
        "grade": "50"
    },
    {
        "_id": "13",
        "student": "567",
        "assignment": "A103",
        "grade": "62"
    },
    {
        "_id": "14",
        "student": "234",
        "assignment": "A201",
        "grade": "5"
    },
    {
        "_id": "15",
        "student": "789",
        "assignment": "A201",
        "grade": "5"
    },
    {
        "_id": "16",
        "student": "890",
        "assignment": "A201",
        "grade": "4"
    },
    {
        "_id": "17",
        "student": "123",
        "assignment": "A201",
        "grade": "4"
    },
    {
        "_id": "18",
        "student": "234",
        "assignment": "A202",
        "grade": "40"
    },
    {
        "_id": "19",
        "student": "789",
        "assignment": "A202",
        "grade": "37"
    },
    {
        "_id": "20",
        "student": "890",
        "assignment": "A202",
        "grade": "38"
    },
    {
        "_id": "21",
        "student": "123",
        "assignment": "A202",
        "grade": "38"
    },
    {
        "_id": "22",
        "student": "234",
        "assignment": "A203",
        "grade": "39"
    },
    {
        "_id": "23",
        "student": "789",
        "assignment": "A203",
        "grade": "35"
    },
    {
        "_id": "24",
        "student": "890",
        "assignment": "A203",
        "grade": "44"
    },
    {
        "_id": "25",
        "student": "123",
        "assignment": "A203",
        "grade": "40"
    },
    {
        "_id": "26",
        "student": "234",  
        "assignment": "A301",
        "grade": "23"  
    },
    {
        "_id": "27",
        "student": "345",  
        "assignment": "A301",
        "grade": "20"  
    },
    {
        "_id": "28",
        "student": "456",  
        "assignment": "A301",
        "grade": "17"  
    },
    {
        "_id": "29",
        "student": "234",  
        "assignment": "A302",
        "grade": "13" 
    },
    {
        "_id": "30",
        "student": "345",  
        "assignment": "A302",
        "grade": "10"  
    },
    {
        "_id": "31",
        "student": "456",  
        "assignment": "A302",
        "grade": "14"  
    },
    {
        "_id": "32",
        "student": "234",  
        "assignment": "A303",
        "grade": "90"  
    },
    {
        "_id": "33",
        "student": "345",  
        "assignment": "A303",
        "grade": "88"  
    },
    {
        "_id": "34",
        "student": "456",  
        "assignment": "A303",
        "grade": "85" 
    },
    {
        "_id": "35",
        "student": "567",
        "assignment": "A401",
        "grade": "5" 
    },
    {
        "_id": "36",
        "student": "234",
        "assignment": "A401",
        "grade": "5"  
    },
    {
        "_id": "37",
        "student": "789",
        "assignment": "A401",
        "grade": "5"  
    },
    {
        "_id": "38",
        "student": "567",
        "assignment": "A402",
        "grade": "10"  
    },
    {
        "_id": "39",
        "student": "234",
        "assignment": "A402",
        "grade": "12"  
    },
    {
        "_id": "40",
        "student": "789",
        "assignment": "A402",
        "grade": "13"  
    },
    {
        "_id": "41",
        "student": "567",
        "assignment": "A403",
        "grade": "70"  
    },
    {
        "_id": "42",
        "student": "234",
        "assignment": "A403",
        "grade": "69"  
    },
    {
        "_id": "43",
        "student": "789",
        "assignment": "A403",
        "grade": "68"  
    },
    {
        "_id": "44",
        "student": "890",
        "assignment": "A501",
        "grade": "10"
    },
    {
        "_id": "45",
        "student": "123",
        "assignment": "A501",
        "grade": "10"
    },
    {
        "_id": "46",
        "student": "234",
        "assignment": "A501",
        "grade": "10"
    },
    {
        "_id": "47",
        "student": "890",
        "assignment": "A502",
        "grade": "24"
    },
    {
        "_id": "48",
        "student": "123",
        "assignment": "A502",
        "grade": "22"
    },
    {
        "_id": "49",
        "student": "234",
        "assignment": "A502",
        "grade": "25"
    },
    {
        "_id": "50",
        "student": "890",
        "assignment": "A503",
        "grade": "90"
    },
    {
        "_id": "51",
        "student": "123",
        "assignment": "A503",
        "grade": "88"
    },
    {
        "_id": "52",
        "student": "234",
        "assignment": "A503",
        "grade": "85"
    },
    {
        "_id": "53",
        "student": "345",
        "assignment": "A601",
        "grade": "18"
    },
    {
        "_id": "54",
        "student": "456",
        "assignment": "A601",
        "grade": "22"
    },
    {
        "_id": "55",
        "student": "567",
        "assignment": "A601",
        "grade": "25"
    },
    {
        "_id": "56",
        "student": "345",
        "assignment": "A602",
        "grade": "40"
    },
    {
        "_id": "57",
        "student": "456",
        "assignment": "A602",
        "grade": "35"
    },
    {
        "_id": "58",
        "student": "567",
        "assignment": "A602",
        "grade": "50"
    },
    {
        "_id": "59",
        "student": "345",
        "assignment": "A603",
        "grade": "80"
    },
    {
        "_id": "60",
        "student": "456",
        "assignment": "A603",
        "grade": "78"
    },
    {
        "_id": "61",
        "student": "567",
        "assignment": "A603",
        "grade": "70"
    },
    {
        "_id": "62",
        "student": "234",
        "assignment": "A701",
        "grade": "39"
    },
    {
        "_id": "63",
        "student": "789",
        "assignment": "A701",
        "grade": "35"
    },
    {
        "_id": "64",
        "student": "234",
        "assignment": "A702",
        "grade": "38"
    },
    {
        "_id": "65",
        "student": "789",
        "assignment": "A702",
        "grade": "33"
    },
    {
        "_id": "66",
        "student": "234",
        "assignment": "A703",
        "grade": "5"
    },
    {
        "_id": "67",
        "student": "789",
        "assignment": "A703",
        "grade": "5"
    },
    {
        "_id": "68",
        "student": "890",
        "assignment": "A801",
        "grade": "34"
    },
    {
        "_id": "69",
        "student": "890",
        "assignment": "A802",
        "grade": "5"
    },
    {
        "_id": "70",
        "student": "890",
        "assignment": "A803",
        "grade": "92"
    },
    {
        "_id": "71",
        "student": "123",
        "assignment": "A901",
        "grade": "40"
    },
    {
        "_id": "72",
        "student": "123",
        "assignment": "A902",
        "grade": "45"
    },
    {
        "_id": "73",
        "student": "123",
        "assignment": "A903",
        "grade": "60"
    },
    {
        "_id": "74",
        "student": "234",
        "assignment": "A1001",
        "grade": "10"
    },
    {
        "_id": "75",
        "student": "345",
        "assignment": "A1001",
        "grade": "9"
    },
    {
        "_id": "76",
        "student": "456",
        "assignment": "A1001",
        "grade": "8"
    },
    {
        "_id": "77",
        "student": "567",
        "assignment": "A1001",
        "grade": "10"
    },
    {
        "_id": "78",
        "student": "234",
        "assignment": "A1001",
        "grade": "7"
    },
    {
        "_id": "79",
        "student": "234",
        "assignment": "A1002",
        "grade": "17"
    },
    {
        "_id": "80",
        "student": "345",
        "assignment": "A1002",
        "grade": "16"
    },
    {
        "_id": "81",
        "student": "456",
        "assignment": "A1002",
        "grade": "17"
    },
    {
        "_id": "82",
        "student": "567",
        "assignment": "A1002",
        "grade": "15"
    },
    {
        "_id": "83",
        "student": "234",
        "assignment": "A1002",
        "grade": "16"
    },
    {
        "_id": "84",
        "student": "234",
        "assignment": "A1003",
        "grade": "58"
    },
    {
        "_id": "85",
        "student": "345",
        "assignment": "A1003",
        "grade": "60"
    },
    {
        "_id": "86",
        "student": "456",
        "assignment": "A1003",
        "grade": "59"
    },
    {
        "_id": "87",
        "student": "567",
        "assignment": "A1003",
        "grade": "57"
    },
    {
        "_id": "88",
        "student": "234",
        "assignment": "A1003",
        "grade": "55"
    },
    {
        "_id": "89",
        "student": "789",
        "assignment": "A1101",
        "grade": "47"
    },
    {
        "_id": "90",
        "student": "890",
        "assignment": "A1101",
        "grade": "50"
    },
    {
        "_id": "91",
        "student": "123",
        "assignment": "A1101",
        "grade": "45"
    },
    {
        "_id": "92",
        "student": "789",
        "assignment": "A1102",
        "grade": "55"
    },
    {
        "_id": "93",
        "student": "890",
        "assignment": "A1102",
        "grade": "60"
    },
    {
        "_id": "94",
        "student": "123",
        "assignment": "A1102",
        "grade": "57"
    },
    {
        "_id": "95",
        "student": "789",
        "assignment": "A1103",
        "grade": "95"
    },
    {
        "_id": "96",
        "student": "890",
        "assignment": "A1103",
        "grade": "100"
    },
    {
        "_id": "97",
        "student": "123",
        "assignment": "A1103",
        "grade": "90"
    },
    {
        "_id": "98",
        "student": "234",
        "assignment": "A1201",
        "grade": "9"
    },
    {
        "_id": "99",
        "student": "345",
        "assignment": "A1201",
        "grade": "8"
    },
    {
        "_id": "100",
        "student": "456",
        "assignment": "A1201",
        "grade": "10"
    },
    {
        "_id": "101",
        "student": "567",
        "assignment": "A1201",
        "grade": "9"
    },
    {
        "_id": "102",
        "student": "234",
        "assignment": "A1202",
        "grade": "45"
    },
    {
        "_id": "103",
        "student": "345",
        "assignment": "A1202",
        "grade": "50"
    },
    {
        "_id": "104",
        "student": "456",
        "assignment": "A1202",
        "grade": "47"
    },
    {
        "_id": "105",
        "student": "567",
        "assignment": "A1202",
        "grade": "43"
    },
    {
        "_id": "106",
        "student": "234",
        "assignment": "A1203",
        "grade": "95"
    },
    {
        "_id": "107",
        "student": "345",
        "assignment": "A1203",
        "grade": "90"
    },
    {
        "_id": "108",
        "student": "456",
        "assignment": "A1203",
        "grade": "85"
    },
    {
        "_id": "109",
        "student": "567",
        "assignment": "A1203",
        "grade": "100"
    },
    {
        "_id": "110",
        "student": "234",
        "assignment": "A1301",
        "grade": "45"
    },
    {
        "_id": "111",
        "student": "234",
        "assignment": "A1302",
        "grade": "47"
    },
    {
        "_id": "112",
        "student": "234",
        "assignment": "A1303",
        "grade": "43"
    },
    {
        "_id": "113",
        "student": "789",
        "assignment": "A1401",
        "grade": "47"
    },
    {
        "_id": "114",
        "student": "890",
        "assignment": "A1401",
        "grade": "43"
    },
    {
        "_id": "115",
        "student": "789",
        "assignment": "A1402",
        "grade": "13"
    },
    {
        "_id": "116",
        "student": "890",
        "assignment": "A1402",
        "grade": "11"
    },
    {
        "_id": "117",
        "student": "789",
        "assignment": "A1403",
        "grade": "95"
    },
    {
        "_id": "118",
        "student": "890",
        "assignment": "A1403",
        "grade": "97"
    },
    {
        "_id": "119",
        "student": "123",
        "assignment": "A1501",
        "grade": "50"
    },
    {
        "_id": "120",
        "student": "234",
        "assignment": "A1501",
        "grade": "45"
    },
    {
        "_id": "121",
        "student": "123",
        "assignment": "A1502",
        "grade": "50"
    },
    {
        "_id": "122",
        "student": "234",
        "assignment": "A1502",
        "grade": "45"
    },
    {
        "_id": "123",
        "student": "123",
        "assignment": "A1503",
        "grade": "90"
    },
    {
        "_id": "124",
        "student": "234",
        "assignment": "A1503",
        "grade": "85"
    },
    {
        "_id": "125",
        "student": "345",
        "assignment": "A1601",
        "grade": "10"
    },
    {
        "_id": "126",
        "student": "456",
        "assignment": "A1601",
        "grade": "11"
    },
    {
        "_id": "127",
        "student": "567",
        "assignment": "A1601",
        "grade": "11"
    },
    {
        "_id": "128",
        "student": "345",
        "assignment": "A1602",
        "grade": "50"
    },
    {
        "_id": "129",
        "student": "456",
        "assignment": "A1602",
        "grade": "45"
    },
    {
        "_id": "130",
        "student": "567",
        "assignment": "A1602",
        "grade": "45"
    },
    {
        "_id": "131",
        "student": "345",
        "assignment": "A1603",
        "grade": "90"
    },
    {
        "_id": "132",
        "student": "456",
        "assignment": "A1603",
        "grade": "85"
    },
    {
        "_id": "133",
        "student": "567",
        "assignment": "A1603",
        "grade": "85"
    },
    {
        "_id": "134",
        "student": "234",
        "assignment": "A1701",
        "grade": "20"
    },
    {
        "_id": "135",
        "student": "234",
        "assignment": "A1702",
        "grade": "44"
    },
    {
        "_id": "136",
        "student": "234",
        "assignment": "A1703",
        "grade": "85"
    },
    {
        "_id": "137",
        "student": "789",
        "assignment": "A1801",
        "grade": "20"
    },
    {
        "_id": "138",
        "student": "789",
        "assignment": "A1802",
        "grade": "44"
    },
    {
        "_id": "139",
        "student": "789",
        "assignment": "A1803",
        "grade": "85"
    },
    {
        "_id": "140",
        "student": "890",
        "assignment": "A1901",
        "grade": "7"
    },
    {
        "_id": "141",
        "student": "890",
        "assignment": "A1902",
        "grade": "44"
    },
    {
        "_id": "142",
        "student": "890",
        "assignment": "A1903",
        "grade": "97"
    },
    {
        "_id": "143",
        "student": "123",
        "assignment": "A2001",
        "grade": "20"
    },
    {
        "_id": "144",
        "student": "234",
        "assignment": "A2001",
        "grade": "17"
    },
    {
        "_id": "145",
        "student": "345",
        "assignment": "A2001",
        "grade": "14"
    },
    {
        "_id": "146",
        "student": "456",
        "assignment": "A2001",
        "grade": "17"
    },
    {
        "_id": "147",
        "student": "567",
        "assignment": "A2001",
        "grade": "19"
    },
    {
        "_id": "148",
        "student": "123",
        "assignment": "A2002",
        "grade": "20"
    },
    {
        "_id": "149",
        "student": "234",
        "assignment": "A2002",
        "grade": "27"
    },
    {
        "_id": "150",
        "student": "345",
        "assignment": "A2002",
        "grade": "24"
    },
    {
        "_id": "151",
        "student": "456",
        "assignment": "A2002",
        "grade": "30"
    },
    {
        "_id": "152",
        "student": "567",
        "assignment": "A2002",
        "grade": "29"
    },
    {
        "_id": "153",
        "student": "123",
        "assignment": "A2003",
        "grade": "48"
    },
    {
        "_id": "154",
        "student": "234",
        "assignment": "A2003",
        "grade": "43"
    },
    {
        "_id": "155",
        "student": "345",
        "assignment": "A2003",
        "grade": "42"
    },
    {
        "_id": "156",
        "student": "456",
        "assignment": "A2003",
        "grade": "40"
    },
    {
        "_id": "157",
        "student": "567",
        "assignment": "A2003",
        "grade": "50"
    },
    {
        "_id": "158",
        "student": "234",
        "assignment": "A2101",
        "grade": "32"
    },
    {
        "_id": "159",
        "student": "789",
        "assignment": "A2101",
        "grade": "30"
    },
    {
        "_id": "160",
        "student": "890",
        "assignment": "A2101",
        "grade": "34"
    },
    {
        "_id": "161",
        "student": "234",
        "assignment": "A2102",
        "grade": "35"
    },
    {
        "_id": "162",
        "student": "789",
        "assignment": "A2102",
        "grade": "25"
    },
    {
        "_id": "163",
        "student": "890",
        "assignment": "A2102",
        "grade": "40"
    },
    {
        "_id": "164",
        "student": "234",
        "assignment": "A2103",
        "grade": "87"
    },
    {
        "_id": "165",
        "student": "789",
        "assignment": "A2103",
        "grade": "90"
    },
    {
        "_id": "166",
        "student": "890",
        "assignment": "A2103",
        "grade": "80"
    }
];

export default grades;