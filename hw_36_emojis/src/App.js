import './css/style.css';
import './css/mystyle.css';
import { Sidebar } from './components/Sidebar.jsx';
import { Footer } from './components/Footer.jsx';
import { NavCenter } from './components/NavCenter.jsx';
import { Emoji } from './components/emoji.js';

export default function App() {
  return (
    <div className="container-fluid row border-top px-xl-5">
      <Sidebar />
      <div className="col-lg-9">
        <NavCenter />
        <Emoji />
      </div>
      <Footer />
    </div>
  );
}
