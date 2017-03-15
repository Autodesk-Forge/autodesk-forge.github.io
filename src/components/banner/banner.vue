<template>
        <!-- Banner -->
        <section id="banner" class="major">
            <div class="inner">
                <header class="major">
                    <h1>{{ title }}</h1>
                </header>
                <div class="content">
                    <p>{{ description }}</p>
                    <ul class="actions">
                        <li><a href="http://viewer-rocks.autodesk.io/" class="button next scrolly">Try Forge now</a></li>
                    </ul>
                </div>
                <div class="content" id="api-list">
                    <ul class="nav nav-tabs">
                        <li><a id="tab1" data-toggle="tab" href="#viewer-api"><span class="cloud-icon icon-viewer"></span><span>VIEWER</span></a></li>
                        <li><a id="tab2" data-toggle="tab" href="#data-management"><span class="cloud-icon icon-data-mgmt"></span><span>DATA MANAGEMENT</span></a></li>
                        <li><a id="tab3" data-toggle="tab" href="#model-derivative"><span class="cloud-icon icon-model-derive"></span><span>MODEL DERIVATIVE</span></a></li>
                        <li><a id="tab4" data-toggle="tab" href="#design-automation"><span class="cloud-icon icon-design-auto"></span><span>DESIGN AUTOMATION</span></a></li>
                    </ul>
                </div>
            </div>
        </section>

</template>

<script>
import styles from './banner.css' ; // eslint-disable-line no-unused-vars

export default {
	data: function () {
        var info =this.$parent.$data ;
        return ({
            title: info.title,
            description: info.description
        }) ;
    }
}
</script>
