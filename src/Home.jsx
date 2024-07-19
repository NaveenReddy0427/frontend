import React from 'react';
import { Box, Stack } from "@chakra-ui/react";
import Card from './Card';
import axios from "axios";

const Home = () => {
    const checkoutHandler = async (amount) => {
        try {
            const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

            const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", { amount });

            const options = {
                key,
                amount: order.amount.toString(), // Ensure amount is in string format
                currency: "INR",
                name: "Naveen",
                description: "Tutorial of RazorPay",
                image: "",
                order_id: order.id,
                callback_url: "http://localhost:4000/api/paymentverification",
                prefill: {
                    name: "Naveen",
                    email: "naveendeva909@gmail.com",
                    contact: "9092857140"
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#121212"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("There was an issue processing your payment. Please try again.");
        }
    };

    return (
        <Box>
            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
                <Card amount={5000} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eGPbl59iYk9yr6_ap2CxF4-SaBOS36haPxQ-kMOe5exGNiOgGy-G7rgquYUomMt_gp0&usqp=CAU"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    );
};

export default Home;
