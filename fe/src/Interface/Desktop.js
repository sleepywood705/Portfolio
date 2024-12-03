import './Desktop.css';
import './Browser.css';
import { Iconset } from './Iconset';
import { Folder } from './Folder';
import { Stack } from '../Browser/Stack/Stack';
import { Contact } from '../Browser/Contact';
import { Addict } from '../Browser/Addict/Addict';
import { Reference } from '../Browser/Reference';
import { Pharagraph } from '../Browser/Pharagraph/Pharagraph';
import { useStateChange, useHeadTo } from '../Hook/Hook';
import { Routes, Route } from "react-router-dom";


/* 바탕화면 */
export function Desktop() {
  const headTo = useHeadTo();
  const folder = useStateChange(false);
  const contact = useStateChange(false);

  return (
    <div id="Desktop">
      <Iconset
        포트폴리오열기={() => {/* ... */}}
        폴더열기={folder.OPEN}
        컨택트열기={contact.OPEN}
        스택열기={() => headTo('/Portfolio/stack/')}
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
          글레카열기={() => headTo('/Portfolio/Pharagraph/')}
        />
      )}

      {contact.state && (
        <Contact 창닫기={contact.CLOSE} />
      )}
    </div>
  );
}