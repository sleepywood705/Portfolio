import './Desktop.css';
import './Browser.css';
import { Iconset } from './Iconset';
import { Folder } from './Folder';
import { Stack } from '../Browser/Stack/Stack';
import { Contact } from '../Browser/Contact';
import { Addict } from '../Browser/Addict/Addict';
import { Reference } from '../Browser/Reference';
import { Pharagraph } from '../Browser/Pharagraph/Pharagraph';
import { Routes, Route } from "react-router-dom";
import { useStateChange, useHeadTo } from '../Hook/Hook';


/* 바탕화면 */
export function Desktop() {
  const headTo = useHeadTo();
  const folder = useStateChange(false);
  const contact = useStateChange(false);
  const portfolio = useStateChange(false);

  return (
    <div id="Desktop">
      <Iconset
        포트폴리오열기={portfolio.OPEN}
        폴더열기={folder.OPEN}
        스택열기={() => headTo('/Portfolio/stack/')}
        컨택트열기={contact.OPEN}
      />

      <Routes>
        <Route path="/Portfolio/stack/*" element={<Stack 창닫기={() => headTo('/Portfolio/')} />} />
        <Route path="/Portfolio/reference/*" element={<Reference 창닫기={() => headTo('/Portfolio/')} />} />
        <Route path="/Portfolio/addict/*" element={<Addict 창닫기={() => headTo('/Portfolio/')} />} />
        <Route path="/Portfolio/Pharagraph/*" element={<Pharagraph 창닫기={() => headTo('/Portfolio/')} />} />
      </Routes>

      {folder.state && (
        <Folder
          창닫기={folder.CLOSE}
          에이딕트열기={() => headTo('/Portfolio/addict/')}
          레퍼런스열기={() => headTo('/Portfolio/reference/')}
          파라그래프열기={() => headTo('/Portfolio/Pharagraph/')}
        />
      )}

      {contact.state && (
        <Contact 창닫기={contact.CLOSE} />
      )}
    </div>
  );
}