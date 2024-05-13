import CustomMetaTag from '../components/custom-meta-tag';

export default function MainLayout(props: { children: JSX.Element }) {
  return (
    <html>
      <head>
        <title>Familinks</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta
          name="description"
          content="Familinks App"
        />
        <meta
          name="keywords"
          content="Bun React HTMX"
        />

        <script src="https://unpkg.com/htmx.org@1.9.11"></script>
        <meta name="htmx-config" content='{"defaultSwapStyle":"outerHTML"}' />

        <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
        <link href="/assets/css/index.min.css" rel="stylesheet" />
          <link href="../css/index.css" rel="stylesheet" />
      </head>

      <body class="bg-white font-color-dark">
        <div id="main">
          {props.children}
        </div>
      </body>

      <script
        defer
        src="https://kit.fontawesome.com/f559975e2f.js"
        crossorigin="anonymous"
      />
      <script src="/assets/js/custom-javascript.min.js" defer></script>
    </html>
  );
}
