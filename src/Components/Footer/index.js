import React from "react";
import { Link } from "react-router-dom";
import {FaPhone, FaMailBulk} from "react-icons/fa"
import style from "./footer.module.css"; 
import logo from '../../assets/logo.png'
import logo1 from '../../assets/logo2.png'

function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.footerCntnr}>
      
      <div className={style.footer_sub_cntnr}>
      <div className={style.footerSection}>

          <div className={style.footerSection1}>
            <div className={style.followus}>FOLLOW US</div>
            <div className={style.Socialimage_cntnr}>
            <div>
                <img loading="lazy" alt="no internet" className={style.social} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPGcgaWQ9ImZhY2Vib29rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTgiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OCIgZD0iTTI4LjM0NCwwSDEuNjU0QTEuNjU2LDEuNjU2LDAsMCwwLDAsMS42NTZWMjguMzQ1QTEuNjU2LDEuNjU2LDAsMCwwLDEuNjU2LDMwSDI4LjM0NEExLjY1NiwxLjY1NiwwLDAsMCwzMCwyOC4zNDVoMFYxLjY1NUExLjY1NiwxLjY1NiwwLDAsMCwyOC4zNDQsMFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjNDI2N2IyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTkiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OSIgZD0iTTIxNS40NTEsMTAyLjRWOTAuOTc2aDMuODVsLjU3Ny00LjQ3aC00LjQyN1Y4My42NTljMC0xLjI5MS4zNTgtMi4xNzEsMi4yMS0yLjE3MWgyLjM0N1Y3Ny41YTMxLjU0OCwzMS41NDgsMCwwLDAtMy40MzktLjE3NmMtMy40LDAtNS43MzIsMi4wNzctNS43MzIsNS44OTJ2My4yOUgyMDd2NC40N2gzLjgzNlYxMDIuNFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk0LjcyMyAtNzIuMzk3KSIgZmlsbD0iI2ZmZiIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="/>
                </div>

            
          
            <div>
                <img alt="no internet" className={style.social} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFYBAGzwdkqHS2nUJ_e3uMPUzsCwMMj8IwSltyjXlKw&s" />
                </div>
            <div>
                <img alt="no internet" className={style.social} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAYFBMVEX///8dofIAnPIAmvEUn/IAmPHT6vz4/P+o1vlvvPVnufUAnfHt9v6BxPdPsPQspvOaz/jH5Pvk8/2Lyffe7/2j0/m73vqUzPhVs/QAlfGx2vrM5/tFrfR5wPYzqfNptPU7QVTNAAADZElEQVR4nO2Z6ZKjIBCAQ0O82kjiMRqjmfd/yyXHTBJFIGB2q7b6+5NUifRJ0+BmQxAEQRAEQRAEQRDEf0R+Stpq30f5P5EeJ53gAAjAWfo1Ve3z4lsOgt0RgmP/9LDMdr7znlzHSWAvCOjq+7NoZFgb314mhsZpXI+CTUGptI/zpmMI3g5IOEyjqR0Gc/kKSKqCc6Ei4p0CBRPcrkHPdeIvGuD1Z+tihJZczWzXIOda+x9qtL7yN18X0wRaNMjQKJ9Xakwc7X0U2N9S25yJh6UA3HNRvRy1xdFrHezutvHMMKgzOgCrpuNbcMgkHenP3DgsGlAb7b9EUGUI90yD8dc4ZMnCmAZM4m9A5Sd/Uz15l3eldowlBa/yR0/5qg49RxPaWDPmbJXPvevgJtq+zISsmZW0WJqLgHqr103tRswms8N5qkJuUUBI1/1MyzgLMMjxZUHYFGBFiPxpDK4m4Va2D6usITjrEscdfZVBYGlyuq2KwaLAEKZANM2CXz8AyqEY931hyYEiTIGf7UA790UNWxkSXZh8VY4dKp1JgTREeH8Jc2re7SygfxVSdGx3yuMqSAGvPuCHFBFkN1qLnQHPffhOC5ceP0C86gd9G/IrlmbHSYEQ+ZvYvtVaEOcgBTZZkPtZ6CJQMZjvBe/hdK4xUYQFQTB9G+VOHbYGwguxU8+5DCy1sm8wBixFwYKqwJ2dfyKi6UDjTou+mRhWhx8cBv3534aQgc3Ig/5sOYJrgaCd8MHVjHJ83wG4kgOkLAop33cA+l9MvNKAqkYeEVgtA3IP6xXc7YLNhcSnFgX34884HMFnYLSefPsBcI73nYSe8t0kFHJV+coH57d2ReF9ObxIvIM3EiHkUmKRqENXLwTcjZpVqCRorsXn8oPOg2byOrFqAGGXIhZ6a1mE8D5wmTKzpgFkK1bACXklrCvB/+OIi3j7Ktiu1IPMKPuC2xcAhF0KTriHMs7rQ9sxl66Qp6t+Hvz6/h7HNCvODMDlfIRs7fJXZkdwvp5AvvvA19E63bpUPrX38F3oKXRJhdEefcHlp8RfKJtBGNygKsOQfPrTdLQfjnzmCMEQ+LFrVt/59Rz2qVoOnHNABFB/gA1js+ayt6Mqwqlv9lVVNckhquPP1XyCIAiCIAiCIAiCIP4ufwDGkyWQ2kpu1wAAAABJRU5ErkJggg==" />
                </div>
            <div>
            <img loading="lazy" alt="no internet" className={style.social} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPHBhdGggaWQ9InlvdXR1YmUiIGQ9Ik0xMi41LDExLjY2Nmw2LjY2NiwzLjMyN0wxMi41LDE4LjMzNFpNMzAsNi4yNXYxNy41QTYuMjUsNi4yNSwwLDAsMSwyMy43NSwzMEg2LjI1QTYuMjUxLDYuMjUxLDAsMCwxLDAsMjMuNzVWNi4yNUE2LjI1MSw2LjI1MSwwLDAsMSw2LjI1LDBoMTcuNUE2LjI1LDYuMjUsMCwwLDEsMzAsNi4yNVpNMjUsMTVjLS4wMjUtNS4xNTQtLjQtNy4xMjUtMy42NTQtNy4zNDYtMy0uMjA1LTkuNjkyLS4yLTEyLjY5MSwwQzUuNDA3LDcuODc1LDUuMDI1LDkuODM3LDUsMTVjLjAyNSw1LjE1NC40LDcuMTI1LDMuNjU0LDcuMzQ2LDMsLjIsOS42ODguMiwxMi42OTEsMEMyNC41OTIsMjIuMTI1LDI0Ljk3NSwyMC4xNjIsMjUsMTVaIiBmaWxsPSJyZWQiLz4NCjwvc3ZnPg0K"></img>
            </div>
            </div>

            <div className={style.contact_cntnr}>
                <div className={style.contact_head}>CONTACT US</div>
                <div className={style.contact_bottom}>
                <div className={style.ctext}>
                    {/* <img loading="lazy" class="footer_social_link_icons" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNi45OTgiIHZpZXdCb3g9IjAgMCAyNyAyNi45OTgiPg0KICA8ZyBpZD0iY2FsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDMpIj4NCiAgICA8ZyBpZD0iXzAwMy0tLUNhbGwiIGRhdGEtbmFtZT0iMDAzLS0tQ2FsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAzKSI+DQogICAgICA8cGF0aCBpZD0iU2hhcGUiIGQ9Ik0xMi4xNzYsMTUuODQ5YTEwLjksMTAuOSwwLDAsMS0zLjI5LTYuMTg2LjkyNS45MjUsMCwwLDEsLjI2Ni0uNzc0TDExLjIzOCw2LjhhLjkzMS45MzEsMCwwLDAsLjEzMS0xLjE1Mkw4LjA0OS41QS45MzEuOTMxLDAsMCwwLDYuODQzLjE1OGwtNS4zMywyLjUxQS45MjYuOTI2LDAsMCwwLDEsMy41OTNjLjI3OSwyLjY1MywxLjQzNiw5LjE3NSw3Ljg0NSwxNS41ODRzMTIuOTMsNy41NjYsMTUuNTg0LDcuODQ1YS45MjYuOTI2LDAsMCwwLC45MjUtLjUxMmwyLjUxLTUuMzNhLjkzMS45MzEsMCwwLDAtLjMzNy0xLjJsLTUuMTU1LTMuMzE5YS45MzEuOTMxLDAsMCwwLTEuMTUyLjEzbC0yLjA4NCwyLjA4NWEuOTI1LjkyNSwwLDAsMS0uNzc0LjI2NiwxMC45LDEwLjksMCwwLDEtNi4xODYtMy4yOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjk5NyAtMC4wMjkpIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgICA8cGF0aCBpZD0iU2hhcGUtMiIgZGF0YS1uYW1lPSJTaGFwZSIgZD0iTTM3LjgyNywyMC44NjJhMS4wMzQsMS4wMzQsMCwwLDEtMS4wMzQtMS4wMzQsNy43NjcsNy43NjcsMCwwLDAtNy43NTgtNy43NTgsMS4wMzQsMS4wMzQsMCwwLDEsMC0yLjA2OSw5LjgzOCw5LjgzOCwwLDAsMSw5LjgyNyw5LjgyN0ExLjAzNCwxLjAzNCwwLDAsMSwzNy44MjcsMjAuODYyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2LjIyMyAtNS42MzkpIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgICA8cGF0aCBpZD0iU2hhcGUtMyIgZGF0YS1uYW1lPSJTaGFwZSIgZD0iTTQzLDE2LjAzNEExLjAzNCwxLjAzNCwwLDAsMSw0MS45NjUsMTVhMTIuOTQ1LDEyLjk0NSwwLDAsMC0xMi45My0xMi45MywxLjAzNCwxLjAzNCwwLDAsMSwwLTIuMDY5LDE1LjAxNiwxNS4wMTYsMCwwLDEsMTUsMTVBMS4wMzQsMS4wMzQsMCwwLDEsNDMsMTYuMDM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3LjAzNCkiIGZpbGw9IiM0MjQyNDIiLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K"/> */}
                    <FaPhone/>&nbsp; &nbsp;<span>8100 08888</span>
                    </div>
                <div className={style.a}><FaMailBulk/>&nbsp; &nbsp;<span>support@iqoostore.com</span></div>

                </div>
            </div>

            </div> 

            <div className={style.footerSection2}>

                 {/* <div className={style.}> */}
                    <div>ABOUT US</div>
        <h3>iQoo Store</h3>
        <p>Your go-to destination for the latest tech and fashion trends.</p>
      {/* </div>  */}
               
            </div>

            <div className={style.footerSection3}>
            {/* <h3>Company</h3>
                <div>About us</div>
                <div>News</div>
                <div>Careers</div>
                <div>Security</div> */}

<div>QUICK LINKS</div>
            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Mobiles">Mobiles</Link>
          </li>
          <li>
            <Link to="/Laptops">Laptops</Link>
          </li>
          <li>
            <Link to="/Fashion">Fashion</Link>
          </li>
          <li>
            <Link to="/Watches">Watches</Link>
          </li>
          <li>
            <Link to="/Accessories">Accessories</Link>
          </li>
        </ul>


            </div>
       
      </div>

      </div>
      </div>

      <div className={style.lastLayer}>
      <div className={style.lastLayerSub}>

<hr/>
<div className={style.reserve}>
<img src={logo1}/>
{/* <img alt="no internet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAaVBMVEX////wsxzvrwDvrQD105H20YnuqgDwshT///3wsQv++e///vr+/Pb88NrywFb++fH99OP54bf77NH1zoP43q376cr43Kf99+nyvkv65cDxtjTxti30yHH1zHr21Zf32aDzw2Dyuj/zxWgPYYzcAAADpklEQVRoge2W27aqOgyGIdXWCqIcRREF3v8hV9NOoAdwzsu9x8h346Cm/dM0TRNFBEEQBEEQBEEQBEEQBEEQBEEQ/xPqT9PUwWhaV01Vp1/m3R9Vk1++rXzJm+Zx/0W+5MCO7lBStZwhfGy2PbgdhLbgbHhsL1tPYCzg+NXHI8RwcEaqGERsEABVOCUtYbGQMBahxSVj8scgBvY678uXDJgtn/RMGGEjwV5Xb8btCUYYpNC/H3/NSqC4QAvtwHPDwx/y8lhaAUxeDCeI8XXsR4E6kLn6t1iid3HWl9NT4vrMjV5U4QYkdENZZh1uQrB9fT8YaF3ejNIBF4LBNkg6HILK+FRMHPVz26LQQ63J5ySPAQPxWwoacqUuuzVZ7qPaHmssi5daDV6n5fuB0WLW6ld9ZNaUXs2Q2Sn6A2prorM9NZtd5xao3ttr1bh6v34f0MJJWJXdMdu5IUX+WK8vboW5VQD12Lqa2rx4usnwRr3F5fNTKP8cgyQTavvb8iVnfLn3LxnL1jNQY2Kat5vGjjOL4BrsGo/PO2kci2+b8s69VwcNfpQwuOJqfTD/GEuI5WStJ1+ewUmd4E70bflU5azwvbx3UvB5O5WKvR8ePDKxpFYm47AQ9Grw/av8Ha/MWmZTnRNpPwzZ7FOzsbfoouTHeVq7tVGVjnD0BwP5M8ovFfI0QVAtUH7wBwsl39ryuW9xkH+Rj5S8nK9BMjAhff1cBb/zl6gw+PPHJP03xAw6xWNHHi/NfHBvTATvFkYXlZzcr2CouFy1D/qSuAYpXs3wVQ/k1RkJOX+8dT3zzlE5KMvQpdXsAkHp0C5128+eI49zHWf8em5qjHskKtetSoQ1Zs0Esyo+XG4l2paPBmkLHvD9AUf/rsuyfTmxpDPrquGzAZM9pcVystN0uPI3IewH1MTfqXIVuiSWWKcDfj9tiwzV2iXWRSfDN3lH3jxgAJ/iqutIpR9Pp4z02qUxv6Wnc10y/fg7yZjqhoD3j/spueUZxzdrp+KHzZbuFWKQ0lSpnPn6J92QCBBdp/zEdif2AmvaIfVf1wnd70BQKHflozrWvdRcJCv84k7+H6Rp5Ey/x7LgWO+DadSEMF1Zv//Yh63muZRg1Wilz7z5RfbTCKqOUDTeJdfk3WrRbt94Q8k59+vhuZrEOpjz8NJc3i1wzro+qK8zj/LJOIfx8L3NOyVJshmbdXCvUf+1f/pTg0UQBEEQBEEQBEEQBEEQBEEQBPGf4x/suCgkqJbwYAAAAABJRU5ErkJggg=="/> */}
        <div>© 2023 iQoo Store. All rights reserved.</div>
        </div>
</div>
      </div>
     
    </footer>
  );
}

export default Footer;
