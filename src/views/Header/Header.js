

import { FcContacts } from "react-icons/fc";

import './Header.css';

function Header() {
    return (
        <header className="App-header">
        
          <table style={{ width : "100%" }}>
            <tbody>
                <tr>
                    <td style={{  width : "50%", textAlign: "right", borderRight: "0.1px solid #687070" }}>
                        <span>Responsive Layout Cards</span> 
                        &nbsp;
                    </td>
        
                    <td style={{ width : "50%" }}>
                        <table>
                        <tbody>
                            <tr>
                                <td style={{ width : "40%", textAlign: "left" }}>
                                &nbsp; <img src="/assets/key.png" className='key_logo' alt="keyLogo" />
                                </td>
                                <td style={{ width : "60%", fontSize: "60%"}}>
                                <FcContacts/> &nbsp; 
                                <span style={{ textDecoration : "underline", cursor: "pointer" }}>About</span>
                                </td>
                                
                            </tr>
                        </tbody>
                        </table>
                            
                    </td>
                </tr>
            </tbody>
          </table>

        </header>
    );
}

export default Header;