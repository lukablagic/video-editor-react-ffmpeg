import React from "react";

const About = () => {
return (
<div style={styles.container}>
<h1 style={styles.heading}>About GIF Izdelovalec (GIF Maker)</h1>
<h2 style={styles.subHeading}>Autorji</h2>
<ul>
<li>Luka Blagić</li>
<li>Vuk Papić</li>
</ul>
<h2 style={styles.subHeading}>Studijski program</h2>
<p>Telekomunikacije</p>
<h2 style={styles.subHeading}>Asistent</h2>
<p>Karlo Crnek</p>
<h2 style={styles.subHeading}>Maribor, 2023</h2>
<h2 style={styles.subHeading}>1. Opis problema</h2>
<p>
Želimo razviti aplikacijo GIF Izdelovalec, ki omogoča enostavno ustvarjanje GIF animacij iz video datotek.
Uporabnik bo lahko naložil video datoteko, določil časovni interval in izbral želeno hitrost predvajanja.
Aplikacija bo uporabljala različne tehnologije, kot so React, Redux, Ant Design, Video React, FFmpeg, itd.,
za izvajanje konverzije video datoteke v GIF format.
</p>
<h2 style={styles.subHeading}>2. Cilji</h2>
<ul>
<li>Razviti aplikacijo, ki omogoča ustvarjanje GIF animacij iz video datotek.</li>
<li>Podpirati različne formate video datotek.</li>
<li>Omogočiti uporabniku določanje časovnega intervala za ustvarjanje GIF animacije.</li>
<li>Možnost izbire hitrosti predvajanja GIF animacije.</li>
<li>Enostaven in intuitiven vmesnik za uporabnika.</li>
<li>Uporabiti Git in GitHub za verzioniranje kode ter sodelovanje z drugimi razvijalci.</li>
</ul>
<h2 style={styles.subHeading}>3. Tehnična dokumentacija</h2>
<h3 style={styles.subSubHeading}>3.1 Tehnologije in orodja</h3>
<ul>
<li>React: Uporabljen za razvoj uporabniškega vmesnika.</li>
<li>Redux: Uporabljen za upravljanje stanja aplikacije.</li>
<li>Ant Design: Uporabljen za oblikovanje uporabniškega vmesnika.</li>
<li>Video React: Uporabljen za predvajanje video datotek v uporabniškem vmesniku.</li>
<li>FFmpeg: Uporabljen za konverzijo video datotek v GIF format.</li>
<li>Git in GitHub: Uporabljen za verzioniranje kode in sodelovanje z drugimi razvijalci.</li>
</ul>
<h3 style={styles.subSubHeading}>3.2 Povezave do dokumentacije</h3>
<ul>
<li>React dokumentacija: <a href="https://react.dev/">https://react.dev/</a></li>
<li>Redux dokumentacija: <a href="https://redux.js.org/">https://redux.js.org/</a></li>
<li>Ant Design dokumentacija: <a href="https://ant.design/">https://ant.design/</a></li>
<li>Video React dokumentacija: <a href="https://video-react.js.org/">https://video-react.js.org/</a></li>
<li>FFmpeg dokumentacija: <a href="https://ffmpeg.org/documentation.html">https://ffmpeg.org/documentation.html</a></li>
<li>Git dokumentacija: <a href="https://git-scm.com/doc">https://git-scm.com/doc</a></li>
<li>GitHub dokumentacija: <a href="https://docs.github.com/en">https://docs.github.com/en</a></li>
<li>Github: <a href="https://github.com/lukablagic/video-editor-react-ffmpeg">https://github.com/lukablagic/video-editor-react-ffmpeg</a></li>
</ul>
</div>
);
};

const styles = {
container: {
fontFamily: "Arial, sans-serif",
maxWidth: "800px",
margin: "0 auto",
padding: "20px",
},
heading: {
fontSize: "28px",
fontWeight: "bold",
marginBottom: "20px",
},
subHeading: {
fontSize: "24px",
fontWeight: "bold",
marginTop: "30px",
marginBottom: "10px",
},
subSubHeading: {
fontSize: "20px",
fontWeight: "bold",
marginTop: "20px",
marginBottom: "10px",
},
};

export default About;