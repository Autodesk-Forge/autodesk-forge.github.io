<template>
	<main-layout>

	    <!-- Main -->
	    <div id="main">
	        <!-- One -->
	        <section id="one">
	            <div class="inner">
	                <header class="major">
	                    <h2>Where should I start?</h2>
	                </header>
	                <p>It is recommended to first go over to the following videos that have been created by the Forge
	                    Developer Advocates which help you to find out more about what each API is capable of doing.
	                </p>
	                <ul class="actions">
	                    <li><a href="http://autode.sk/2fS588E" target="demo" class="button next scrolly">OAuth & Data Management</a></li>
	                    <li><a href="http://autode.sk/2fS2fVa" target="demo" class="button next scrolly">Model Derivative</a></li>
	                    <li><a href="http://autode.sk/2dGpi0M" target="demo" class="button next scrolly">Viewer</a></li>
	                    <li><a href="http://autode.sk/2fS8Fnc" target="demo" class="button next scrolly">Design Automation</a></li>
	                </ul>

	                <p>Once you feel ready, <a href="#three">give it a try using cUrl commands</a>.</p>
	            </div>
	        </section>

	        <!-- Two -->
	        <section id="two" class="spotlights">
	            <section id="data-management">
	                <div class="iframe"><iframe src="https://www.youtube.com/embed/3dmsI-7sD4U" frameborder="0" allowfullscreen></iframe></div>
	                <div class="content">
	                    <div class="inner">
	                        <header class="major">
	                            <h3>Intro to Forge oAuth and Data Management</h3>
	                        </header>
	                        <p>Augusto Goncalves, Senior Developer Consultant, talks about Forge oAuth and Data Management
	                            during the Forge and Fusion 360 Hackathon.<br />
	                            OAuth is the open standard used across the Forge Platform for token-based authentication and
	                            authorization.
	                            The Data Management API provides a unified and consistent way to access data across A360,
	                            Fusion 360, and the Object Storage Service.</p>
	                    </div>
	                </div>
	            </section>
	            <section id="model-derivative">
	                <div class="iframe"><iframe src="https://www.youtube.com/embed/VNPmqsLOzjU" frameborder="0" allowfullscreen></iframe></div>
	                <div class="content">
	                    <div class="inner">
	                        <header class="major">
	                            <h3>Intro to the Forge Model Derivative API</h3>
	                        </header>
	                        <p>Adam Nagy, Senior Developer Consultant, presents the Model Derivative API during the Forge
	                            and Fusion 360 Hackathon. This API enables users to represent and share their designs in
	                            different formats, as well as to extract valuable metadata. (Its translation functionality
	                            was previously bundled as part of the “View and Data API”).</p>
	                    </div>
	                </div>
	            </section>
	            <section id="viewer-api">
	                <div class="iframe"><iframe src="https://www.youtube.com/embed/eXNAbb2D1fM" frameborder="0" allowfullscreen></iframe></div>
	                <div class="content">
	                    <div class="inner">
	                        <header class="major">
	                            <h3>Intro to Viewer API</h3>
	                        </header>
	                        <p>Jaime Rosales, Forge Developer Advocate, takes you through the Forge Viewer API during the Forge
	                            and Fusion 360 Hackathon. Viewer (formerly part of the “View and Data API”) is a
	                            WebGL-based, JavaScript library for 3D and 2D model rendering. 3D and 2D model data may
	                            come from a wide array of applications, such as AutoCAD, Fusion 360, Revit, and many more.</p>
	                    </div>
	                </div>
	            </section>
	            <section id="design-automation">
	                <div class="iframe"><iframe src="https://www.youtube.com/embed/GWsJM344CJE" frameborder="0" allowfullscreen></iframe></div>
	                <div class="content">
	                    <div class="inner">
	                        <header class="major">
	                            <h3>Intro to Design Automation API</h3>
	                        </header>
	                        <p>Design Automation API, formerly known as the “AutoCAD I/O API”, provides the ability to run
	                            scripts on your design files, leveraging the scale of the Forge Platform to automate
	                            repetitive tasks. Albert Szilvasy, Senior Software Architect, gives an overview and
	                            demos of this API during the Forge and Fusion 360 Hackathon.</p>
	                    </div>
	                </div>
	            </section>
	        </section>

	        <!-- Three -->
	        <section id="three">
	            <div class="inner">
	                <header class="major">
	                    <h2>Create your first Forge App</h2>
	                </header>
	                <p>In order to use the Autodesk Forge API, you first need to create your application and get your application
	                    keys. These keys will be used by your application to get an authorization code to access the API.
	                </p>
	                <p>To use Autodesk Forge API, first log in or register with your Autodesk ID. Once you are logged in, you:
	                    can create ypur App keys.
	                    <ol>
	                        <li>Click on “Create App”</li>
	                        <li>Select the API you want to associate to your App/keys</li>
	                        <li>Enter the app name, description, and your website URL</li>
	                        <li>The "Callback URL" is for OAuth2 three-leg authentication (*). If you do not have a website callback
	                        URL ready, you can use a localhost endpoint for development propose
	                        (i.e. http://localhost:3000/mycallback).</li>
	                    </ol>
	                    Once you have an application set up, you will see a Client ID, Client Secret. It is important to not
	                    share (or compromise) your secret key. As this key is the one which is securing your account for API
	                    usage.</p>
	                <p>(*) A typical OAuth flow involves three parties: the end-user (or resource owner),
	                    the client (the third-party application), and the server (or authorization server).
	                    So a 3-legged flow involves all three. YOu may use 3-legged with the Forge API if your application
	                    needs to access resources (i.e. file) on a A360, BIM360 user account.</p>
	                <p>The term 2-legged is used to describe an OAuth-authenticated request without an end-user involved.
	                    It means your application will own the resources and use the Forge API with no notion of a user.
	                </p>

	                <ul class="actions">
	                    <li><a href="https://developer.autodesk.com/myapps/create" target="demo" class="button next scrolly">Create your App</a></li>
	                </ul>
	            </div>
	        </section>

	        <!-- Four -->
	        <section id="four" class="style3">
	            <div class="inner">
	                <header class="major">
	                    <h2>Get your 2-legged Access Token</h2>
	                </header>
	                <p>To get an access token, pass your Client ID (as the client_id parameter) and Client Secret
	                    (as the client_secret parameter) to the Forge Authentication API. However, this cannot be done
	                    from the browser context because it would be a security hole to let your keys "leak out" to an
	                    unsafe location. Therefore, you need to setup an Auth Token Service and embed your keys safely
	                    in that service.</p>
	                <p>You can create as many Access Token you want with different scopes. Scopes are a way to tell the
	                    Forge server what kind of operation and which API you want to let the application doing. For example,
	                    do you want to let the application to only read information, or write new content.</p>
	                <p>You also need to decide if you want the application to work on a user account (3 legged) or if your
	                    application manage its own files (2 legged). Here, we will continue with 2 legged authorization which
	                    is the easiest to implement and use the Forge OSS service for storage.</p>

	                <h3>cUrl example</h3>
	                <pre><code>curl https://developer.api.autodesk.com/authentication/v1/authenticate \
  --data 'client_id=MY_CLIENT_ID&client_secret=MY_CLIENT_SECRET&grant_type=client_credentials&scope=data:read%20data:write%20bucket:create' \
  --header 'Content-Type:application/x-www-form-urlencoded' -k  </code></pre>

	                <p>Make sure to replace MY_CLIENT_ID and MY_CLIENT_SECRET with the keys you obtained in the previous step.
	                    When you get the result, copy'n paste the "access_token". This Access Token will expire after
	                    NN seconds and you will have to do this step again to get a new token. NN is the value returned to
	                    you in the expires_in key.</p>

	                <p>If you do not have cUrl, or have issues to generate the access token, you can generate the access
	                    token using this website.</p>
	                <ul class="actions">
	                    <li><a href="https://models.autodesk.io/" target="demo" class="button next scrolly">Generate a token online</a></li>
	                </ul>
	            </div>
	        </section>

	        <!-- Five -->
	        <section id="five" class="style4">
	            <div class="inner">
	                <header class="major">
	                    <h2>Create a Bucket</h2>
	                </header>
	                <p>"Buckets" are containers for data used by the Autodesk Data Management API (OSS). Before uploading a file,
	                    create a bucket and set a retention policy. Briefly, the policies are:
	                    <ul>
	                        <li>transient: cache-like storage that persists for only 24 hours, ideal for intermittent objects.</li>
	                        <li>temporary: storage that persists for 30 days. Good for data that is uploaded and accessed,
	                            then not needed later. This type of bucket storage will save your service money.</li>
	                        <li>persistent: storage that persists until deleted. Items that have not been accessed for 2
	                            years may be archived.</li>
	                    </ul>
	                    There are also some restrictions on the characters used in the bucket name. It must be between
	                    3 to 128 characters long and contain only lowercase letters, numbers and the symbols . _ -</p>
	                <p>Another restrictions is that bucket names must be unique across all accounts on the system.</p>

	                <h3>cUrl example</h3>
	                <pre><code>curl 'https://developer.api.autodesk.com/oss/v2/buckets' \
  -H 'Authorization: Bearer MY_ACCESS_TOKEN' -H 'Content-Type: application/json' \
  -d '{"bucketKey":"MY_BUCKET_NAME","policyKey":"transient"}' -k  </code></pre>
	                <p>Make sure to replace MY_ACCESS_TOKEN with the access token you obtained in the previous step, and
	                    replace MY_BUCKET_NAME with a unique name.</p>
	            </div>
	        </section>

	        <!-- Five -->
	        <section id="six" class="style5">
	            <div class="inner">
	                <header class="major">
	                    <h2>Upload File to your Bucket</h2>
	                </header>
	                <p>The next step is to put a file into your bucket so that it can be translated and viewed. Currently
	                    over 60 file formats are supported, including:
	                    <ul>
	                        <li>Autodesk DWG</li>
	                        <li>Autodesk Inventor</li>
	                        <li>Fusion 360</li>
	                        <li>SIM 360</li>
	                        <li>Autodesk Navisworks</li>
	                        <li>Autodesk Revit</li>
	                        <li>Solidworks</li>
	                        <li>CATIA</li>
	                        <li>Siemens Parasolid</li>
	                        <li>Siemens NX</li>
	                        <li>Siemens OpenJT</li>
	                        <li>WaveFront Technologies OBJ</li>
	                        <li><a href="https://developer.autodesk.com/en/docs/model-derivative/v2/overview/supported-translations/" target="_blank">...</a></li>
	                    </ul>
	                    The key piece of information returned upon successful upload is the id, which is needed for the
	                    next steps.</p>
	                <p>If your model consists of several files (such as an Inventor Assembly IAM file and several IPT parts
	                    files), compress them in a ZIP file and upload the ZIP file to your bucket.</p>

	                <h3>cUrl example</h3>
	                <pre><code>curl 'https://developer.api.autodesk.com/oss/v2/buckets/MY_BUCKET_NAME/objects/MY_OBJECT_NAME' \
  -X 'PUT' -H 'Authorization: Bearer MY_ACCESS_TOKEN' \
  -H 'Content-Type: application/octet-stream' -T 'MY_FILE' -k  </code></pre>
	                <p>Make sure to replace MY_ACCESS_TOKEN, MY_BUCKET_NAME values used in the previous steps. And
	                    MY_OBJECT_NAME with a urlencoded version of the filename, and last point to a file on your hard-drive
	                    (aka 'MY_FILE').</p>
	                <p>For the response your will need to grab the 'objectId' and base64 safe urlencode it. You can proceed by
	                    copy'n paste the 'objectId' string on <a href="https://www.base64encode.org/" target="_blank">this website.</a></p>
	            </div>
	        </section>

	        <!-- Six -->
	        <section id="six" class="style6">
	            <div class="inner">
	                <header class="major">
	                    <h2>Translate the model for the Viewer</h2>
	                </header>
	                <p>Translate a source file from one format to another.</p>
					<p>Derivatives are stored in a manifest that is updated each time this endpoint is used on a source file.</p>
                    <p>Note that this endpoint is asynchronous and initiates a process that runs in the background, rather
                        than keeping an open HTTP connection until completion. Use the <a href="https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET">GET :urn/manifest</a>
                        endpoint to poll for the job’s completion.</p>

                    <h3>cUrl example</h3>
                    <pre><code>curl -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Authorization: Bearer MY_ACCESS_TOKEN' 'https://developer.api.autodesk.com/modelderivative/v2/designdata/job' \
  -d '{"input":{"urn": "MY_URN"},"output":{"formats":[{"type":"svf","views":["2d","3d"]}]}}' -k  </code></pre>
                    <p>Make sure to replace MY_ACCESS_TOKEN value used in the previous steps. And
	                    MY_URN with a base64 encoded version of the objectId.</p>
	            </div>
	        </section>

	        <!-- Seven -->
	        <section id="seven" class="style1">
	            <div class="inner">
	                <header class="major">
	                    <h2>Monitor translation progress</h2>
	                </header>
	                <p>Returns information about derivatives that correspond to a specific source file, including
	                    derivative URNs and statuses.</p>
                    <p>The statuses are used to verify whether the translation of requested output files is complete.</p>

                    <h3>cUrl example</h3>
                    <pre><code>curl -X 'GET' -H 'Authorization: Bearer MY_ACCESS_TOKEN' \
  'https://developer.api.autodesk.com/modelderivative/v2/designdata/MY_URN/manifest' -k  </code></pre>
                    <p>Make sure to replace MY_ACCESS_TOKEN value used in the previous steps. And
                        MY_URN with a base64 encoded version of the objectId.</p>
                    <p>When you read status=success and progress=complete, then the file is ready for the viewer.</p>
	            </div>
	        </section>

	        <!-- Height -->
	        <section id="height" class="style2">
	            <div class="inner">
	                <header class="major">
	                    <h2>View result</h2>
	                </header>
	                <p>The Viewer (formerly part of the “View and Data API”) is a WebGL-based, JavaScript library for
	                    3D and 2D model rendering. 3D and 2D model data may come from a wide array of applications,
	                    such as AutoCAD, Fusion 360, Revit, and many more.</p>
	                <p>The Viewer requires a WebGL-canvas compatible browser:
                        <ul>
                    	    <li>Chrome 50+</li>
                            <li>Firefox 45+</li>
                            <li>Opera 37+</li>
                            <li>Safari 9+</li>
                            <li>Microsoft Edge 20+</li>
                            <li>Internet Explorer 11</li>
                        </ul>
                    </p>
                    <h3>Browser example</h3>
                    <p>Instead of writing your own HTML page for this quick start and setup a server,
                        we will be using a prebuilt HTML page using the URL below.</p>
	                <pre><code>https://models.autodesk.io/view.html?token=MY_ACCESS_TOKEN&urn=MY_URN</code></pre>
	                <p>Make sure to replace MY_ACCESS_TOKEN value used in the previous steps. And
                        MY_URN with a base64 encoded version of the objectId.</p>
	            </div>
	        </section>
	    </div>

	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/main.vue' ;

	export default {
		data: function () {
			var navigationMenu =require ('../data/navigation') ;
            for ( var i =0 ; i < navigationMenu.length ; i++ ) {
                if ( navigationMenu [i].image )
                    navigationMenu [i].image =require ('' + navigationMenu [i].image) ;
            }
            return ({
                title: 'Getting Started',
                description: 'This page is intended to help you getting started with the Forge API.',
                menu: navigationMenu
            }) ;
        },
		components: {
			MainLayout
		}
	}
</script>

<style>
#banner.GettingStarted {
    background-image: url(./GettingStarted/GettingStarted2.jpg);
}
</style>

<style scoped>
.spotlights > section > .iframe iframe {
	position: relative;
	top: 50%;
	left: 50%;
	-webkit-transform: translateY(-50%) translateX(-50%);
	-ms-transform: translateY(-50%) translateX(-50%);
	transform: translateY(-50%) translateX(-50%);

	width: 100%;
	height: calc(30vw / 1.77);
}

.spotlights > section > .iframe {
    width: 30%;
}

.spotlights > section:nth-child(6n - 5) > .iframe,
.spotlights > section:nth-child(6n - 5) > .iframe iframe {
    background-color: #6fc3df;
}

.spotlights > section:nth-child(6n - 4) > .iframe,
.spotlights > section:nth-child(6n - 4) > .iframe iframe {
    background-color: #8d82c4;
}

.spotlights > section:nth-child(6n - 3) > .iframe,
.spotlights > section:nth-child(6n - 3) > .iframe iframe {
    background-color: #ec8d81;
}

.spotlights > section:nth-child(6n - 2) > .iframe,
.spotlights > section:nth-child(6n - 2) > .iframe iframe {
    background-color: #e7b788;
}

.spotlights > section:nth-child(6n - 1) > .iframe,
.spotlights > section:nth-child(6n - 1) > .iframe iframe {
    background-color: #8ea9e8;
}

.spotlights > section:nth-child(6n) > .iframe,
.spotlights > section:nth-child(6n) > .iframe iframe {
    background-color: #87c5a4;
}

@media screen and (max-width: 1680px) {

    .spotlights > section > .iframe {
        width: 40%;
    }

	.spotlights > section > .iframe iframe {
		height: calc(40vw / 1.77);
	}

}

@media screen and (max-width: 1280px) {

    .spotlights > section > .iframe {
        width: 45%;
    }

    .spotlights > section > .iframe iframe {
        height: calc(45vw / 1.77);
    }

}

@media screen and (max-width: 980px) {

    .spotlights > section > .iframe {
        width: 100%;
        height: calc(100vw / 1.77);
    }

    .spotlights > section > .iframe iframe {
    	position: relative;
    	top: 0%;
    	left: 50%;
    	-webkit-transform: translateY(0%) translateX(-50%);
        -ms-transform: translateY(0%) translateX(-50%);
       	transform: translateY(0%) translateX(-50%);

       	width: 100%;
       	height: 100%;
    }

}
</style>