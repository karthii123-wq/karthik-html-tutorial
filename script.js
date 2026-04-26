function loadContent(topic) {

    let data = {

        intro: `
            <h2>Introduction</h2>
            <p>HTML stands for HyperText Markup Language. It is used to create web pages.</p>
        `,

        basic: `
            <h2>Basic Elements</h2>
            <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;&lt;/head&gt;
&lt;body&gt;&lt;/body&gt;
&lt;/html&gt;
            </pre>
        `,

        headings: `
            <h2>Headings</h2>
            <pre>
&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
            </pre>
        `,

        paragraphs: `
            <h2>Paragraphs</h2>
            <pre>
&lt;p&gt;This is a paragraph&lt;/p&gt;
            </pre>
        `,

        forms: `
            <h2>Forms</h2>
            <pre>
&lt;form&gt;
&lt;input type="text" placeholder="Name"&gt;
&lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;
            </pre>
        `,

        div: `
            <h2>Div</h2>
            <p>Div is used to group elements.</p>
            <pre>
&lt;div&gt;Content&lt;/div&gt;
            </pre>
        `,

        links: `
            <h2>Links</h2>
            <pre>
&lt;a href="https://google.com"&gt;Go to Google&lt;/a&gt;
            </pre>
        `,

        images: `
            <h2>Images</h2>
            <pre>
&lt;img src="image.jpg" width="200"&gt;
            </pre>
        `,

        buttons: `
            <h2>Buttons</h2>
            <pre>
&lt;button&gt;Click Me&lt;/button&gt;
            </pre>
        `,

        tables: `
            <h2>Tables</h2>
            <pre>
&lt;table border="1"&gt;
&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Mythri&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
            </pre>
        `,

        comments: `
            <h2>Comments</h2>
            <pre>
&lt;!-- This is a comment --&gt;
            </pre>
        `,

        colors: `
            <h2>Colors</h2>
            <pre>
&lt;p style="color:red;"&gt;Red text&lt;/p&gt;
            </pre>
        `
    };

    document.getElementById("content").innerHTML = data[topic];
}