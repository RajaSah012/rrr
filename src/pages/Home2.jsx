import React from 'react'
import Button from '../components/button'
import { useNavigate } from "react-router-dom";
const Home2 = () => {
    const navigate = useNavigate();

    return (
        <main className="relative w-screen min-h-screen">
            <img
                src="/home2.jpg"
                alt="Home"
                className="absolute inset-0 w-full h-full md:block object-fill"
            />
            <div className="hidden md:block absolute inset-0">

                <Button
                    onClick={() => navigate("/gallery")}
                    className="absolute top-[35%] left-[18%] "
                >
                    Gallery
                </Button>

                <Button
                    onClick={() => navigate("/team")}
                    className="absolute top-[45%] left-[31%] "
                >
                    Team
                </Button>

                 <Button
                    onClick={() => navigate("/primary-school")}
                   className="absolute top-[45%] left-[55%] "
                >
                    Primary School (IGCSE+CBSE)
                </Button>

                 <Button
                    onClick={() => navigate("/primary-school")}
                    className="absolute top-[70%] left-[15%] "
                >
                    Primary School (CBSE)
                </Button>

                  <Button
                    onClick={() => navigate("/preschool")}
                    className="absolute top-[85%] left-[40%] "
                >
                    PreSchool
                </Button>

                 <Button
                    onClick={() => navigate("/contact-us")}
                    className="absolute top-[80%] left-[70%] "
                >
                    ContactUs
                </Button>

                 <Button
                    onClick={() => navigate("/testimonials")}
                  className="absolute top-[50%] left-[80%] "
                >
                    Parents World
                </Button>
                
            </div>

            

        </main>
    )
}
export default Home2;
