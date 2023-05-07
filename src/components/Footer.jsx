import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
        <Container>
            <div className="footer-content">
                <p>PayWise &copy; 2023</p>
                <p><Link to="https://phillipf.dk" target="_blank">Lavet af Phillip Friis-Alstrup</Link></p>
            </div>
        </Container>
    </footer>
  )
}
