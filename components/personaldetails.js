Vue.component('personaldetails', {
    template: `
        <div class="container">
            <div class="row" style="margin-bottom: 0;">
                <div class="col s12 offset-m1">
                    <h1 class="header">
                        Osobní údaje
                    </h1>
                </div>
            </div>
            <personaldetails-list :items="person.items" :mode="'simple'" :level="0"></personaldetails-list>
            <div class="row">
                <div class="col s12 offset-m1">
                    <ul class="collection">
                        <li class="collection-item">
                            <div class="switch">
                                <label>
                                    <input type="checkbox" v-model="advancedMode">
                                    <span class="lever"></span>
                                    Pokročilá pole
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <personaldetails-list :items="person.items" :mode="'advanced'" :level="0" v-if="advancedMode"></personaldetails-list>
            <!-- Modals -->
            <div id="modalEditPersonalDetail" class="modal">
                <div class="modal-content">
                    <h4>Upravit</h4>
                    <div class="input-field">
                        <label for="editTag" :class="{active:modalEditPersonalDetail.tag}">Tag</label>
                        <input id="editTag" type="text" v-model="modalEditPersonalDetail.tag" />
                    </div>
                    <div class="input-field">
                        <label for="editValue" class="active">Hodnota</label>
                        <textarea id="editValue" class="materialize-textarea" v-model="modalEditPersonalDetail.value"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <a class="modal-close waves-effect waves-green btn-flat">Zavřít</a>
                </div>
            </div>
            <div id="modalAddPersonalDetail" class="modal">
                <div class="modal-content">
                    <h4>Přidat</h4>
                    <ul class="collection with-header">
                        <li class="collection-header"><h5>Základní údaje</h5></li>
                        <li class="collection-item modal-close" v-on:click="addItem('NAME')">Jméno<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('BIRTH')">Narození<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('DEATH')">Úmrtí<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('BURIAL')">Pohřeb<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-header"><h5>Životní události</h5></li>
                        <li class="collection-item modal-close" v-on:click="addItem('BAPM')">Křest<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('CHR')">Křtiny<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('CENS')">Sčítání lidu<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('CREM')">Kremace<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('GRAD')">Promoce<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('EMIG')">Emigrace<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('IMMI')">Imigrace<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('NATU')">Naturalizace<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('RETI')">Odchod do důchodu<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('PROB')">Dědické řízení<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('WILL')">Závěť<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-header"><h5>Atributy</h5></li>
                        <li class="collection-item modal-close" v-on:click="addItem('OCCU')">Povolání<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('EDUC')">Vzdělání<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('RELI')">Náboženství<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('RESI')">Bydliště<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('NATI')">Národnost<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('CAST')">Kasta<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('DSCR')">Fyzický popis<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('NICK')">Přezdívka<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('IDNO')">Identifikační číslo<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('SSN')">Číslo sociálního pojištění<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-header"><h5>Anotace</h5></li>
                        <li class="collection-item modal-close" v-on:click="addItem('NOTES')">Poznámky<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-item modal-close" v-on:click="addItem('TEXT')">Text<a class="secondary-content"><i class="material-icons">add</i></a></li>
                        <li class="collection-header"><h5>Vlastní</h5></li>
                        <li class="collection-item modal-close" v-on:click="addItem('CUSTOM')">Vlastní přidání<a class="secondary-content"><i class="material-icons">add</i></a></li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a class="modal-close waves-effect waves-green btn-flat">Zavřít</a>
                </div>
            </div>
            <div style="position: fixed; bottom: 45px; right: 24px;">
                <button data-target="modalAddPersonalDetail" class="btn modal-trigger btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></button>
            </div>
        </div>
    `,
    props: ["person"],
    data: function() {
        return {
            advancedModeState: false,
            modalEditPersonalDetail: {}
        }
    },
    computed: {
        advancedMode: {
            get() {
                return this.advancedModeState;
            },
            set(state) {
                if (state == true) {
                    this.advancedModeState = true;
                    window.setTimeout(function() { M.AutoInit(); }, 200);
                } else {
                    this.advancedModeState = false;
                }
            }
        }
    },
    methods: {
        addItem: function(item) {
            // Helper function to create item structure
            const createItem = (tag, items = []) => {
                return { 'level': 1, 'tag': tag, 'value': '', 'items': items };
            };
            
            const createSubItem = (tag, value = '') => {
                return { 'level': 2, 'tag': tag, 'value': value, 'items': [] };
            };
            
            // Events with DATE and PLAC
            const eventWithDatePlace = ['BIRTH', 'DEATH', 'BURIAL', 'BAPM', 'CHR', 'CENS', 'CREM', 'GRAD', 'EMIG', 'IMMI', 'NATU'];
            // Events with only DATE
            const eventWithDateOnly = ['RETI', 'PROB', 'WILL'];
            // Simple attributes (no children)
            const simpleAttributes = ['OCCU', 'EDUC', 'RELI', 'NATI', 'CAST', 'DSCR', 'NICK', 'IDNO', 'SSN'];
            
            // Map item name to tag (if different)
            const tagMap = {
                'BIRTH': 'BIRT',
                'DEATH': 'DEAT',
                'BURIAL': 'BURI',
                'NOTES': 'NOTE',
                'TEXT': 'TEXT'
            };
            
            const tag = tagMap[item] || item;
            
            if (item === "NAME") {
                this.person.items.push(createItem('NAME', [
                    createSubItem('GIVN'),
                    createSubItem('SURN')
                ]));
            } else if (eventWithDatePlace.includes(item)) {
                this.person.items.push(createItem(tag, [
                    createSubItem('DATE'),
                    createSubItem('PLAC')
                ]));
            } else if (eventWithDateOnly.includes(item)) {
                this.person.items.push(createItem(tag, [
                    createSubItem('DATE')
                ]));
            } else if (item === "RESI") {
                this.person.items.push(createItem('RESI', [
                    createSubItem('DATE'),
                    createSubItem('ADDR')
                ]));
            } else if (simpleAttributes.includes(item)) {
                this.person.items.push(createItem(tag));
            } else if (item === "NOTES" || item === "TEXT") {
                this.person.items.push(createItem(tag));
            } else if (item === "CUSTOM") {
                this.advancedMode = true;
                this.person.items.push(createItem(''));
                var rootField = this.$children[0];
                window.setTimeout(function() { rootField.$children[rootField.$children.length - 1].editItem(); }, 200);
            }
        }
    }
});

Vue.component('personaldetails-list', {
    template: `
        <div class="row">
            <template v-for="(detail, index) in items">
                <personaldetails-item :detail="detail" :index="index" :mode="mode" :level="level"></personaldetails-item>
            </template>
        </div>
    `,
    props: ["items", "mode", "level"]
});

Vue.component('personaldetails-item', {
    template: `
        <div class="row" style="padding: 0; margin: 0;">

            <div v-if="mode=='advanced'" class="col offset-s1" :class="{'s7':level==0,'s11':level!=0}">
                <div class="input-field">
                    <label :for="id" :class="{active:detail.value}">{{detail.tag}} ({{tag(detail.tag).name}})</label>
                    <input :id="id" type="text" v-model="detail.value"/>
                    <div class="fixed-action-btn horizontal direction-top direction-left" style="position: absolute; display: inline-block; right: 24px;">
                        <a class="btn-floating btn-large transparent z-depth-0" style="cursor: default;"><i class="large material-icons teal-text text-lighten-3">more_vert</i></a>
                        <ul>
                            <li v-if="index > 0"><a class="btn-floating teal lighten-4"><i class="material-icons" v-on:click="upItem();">arrow_drop_up</i></a></li>
                            <li v-if="index < $parent.items.length - 1"><a class="btn-floating teal lighten-4"><i class="material-icons" v-on:click="downItem();">arrow_drop_down</i></a></li>
                            <li><a class="btn-floating red"><i class="material-icons" v-on:click="deleteItem();">clear</i></a></li>
                            <li><a class="btn-floating yellow darken-1"><i class="material-icons" v-on:click="addItem();">add</i></a></li>
                            <li><a class="btn-floating green"><i class="material-icons" v-on:click="editItem();">mode_edit</i></a></li>
                        </ul>
                    </div>
                </div>
                <personaldetails-list :items="detail.items" :mode="mode" :level="level + 1"></personaldetails-list>
            </div>

            <div v-else-if="tag(detail.tag).visible==true" class="col s12 offset-m1">

                <template v-if="detail.tag=='OBJE'">
                    <div class="card">
                        <div class="card-image" v-if="((detail.items.find(item => item.tag=='FILE') || {}).value || '').startsWith('http')">
                            <img :src="(detail.items.find(item => item.tag=='FILE') || {}).value">
                            <span class="card-title">
                                {{(detail.items.find(item => item.tag=='_DATE') || {}).value}}
                            </span>
                        </div>
                        <div class="card-content">
                            {{(detail.items.find(item => item.tag=='TITL') || {}).value}}
                        </div>
                    </div>
                </template>

                <template v-else-if="detail.tag=='NAME'">
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '1'" class="active">{{tag('GIVN').name}}</label>
                            <input :id="id + '1'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='GIVN')] || {}).value" v-on:input="detail.value=detail.items[detail.items.findIndex(x => x.tag=='GIVN')].value + ' /' + detail.items[detail.items.findIndex(x => x.tag=='SURN')].value + '/'"/>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '2'" class="active">{{tag('SURN').name}}</label>
                            <input :id="id + '2'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='SURN')] || {}).value" v-on:input="detail.value=detail.items[detail.items.findIndex(x => x.tag=='GIVN')].value + ' /' + detail.items[detail.items.findIndex(x => x.tag=='SURN')].value + '/'"/>
                        </div>
                    </div>
                </template>

                <template v-else-if="detail.tag=='BIRT'">
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '1'" class="active">Datum narození</label>
                            <input :id="id + '1'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='DATE')] || {}).value"/>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '2'" class="active">Místo narození</label>
                            <input :id="id + '2'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='PLAC')] || {}).value"/>
                        </div>
                    </div>
                </template>

                <template v-else-if="detail.tag=='DEAT'">
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '1'" class="active">Datum úmrtí</label>
                            <input :id="id + '1'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='DATE')] || {}).value"/>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '2'" class="active">Místo úmrtí</label>
                            <input :id="id + '2'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='PLAC')] || {}).value"/>
                        </div>
                    </div>
                </template>

                <template v-else-if="detail.tag=='BURI'">
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '1'" class="active">Datum pohřbu</label>
                            <input :id="id + '1'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='DATE')] || {}).value"/>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '2'" class="active">Místo pohřbu</label>
                            <input :id="id + '2'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='PLAC')] || {}).value"/>
                        </div>
                    </div>
                </template>

                <template v-else-if="['BAPM','CHR','CENS','CREM','GRAD','EMIG','IMMI','NATU'].includes(detail.tag)">
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '1'" class="active">Datum ({{tag(detail.tag).name}})</label>
                            <input :id="id + '1'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='DATE')] || {}).value"/>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '2'" class="active">Místo ({{tag(detail.tag).name}})</label>
                            <input :id="id + '2'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='PLAC')] || {}).value"/>
                        </div>
                    </div>
                </template>

                <template v-else-if="detail.tag=='RESI'">
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '1'" class="active">Datum pobytu</label>
                            <input :id="id + '1'" type="text" v-model="(detail.items[detail.items.findIndex(x => x.tag=='DATE')] || {}).value"/>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="input-field">
                            <label :for="id + '2'" class="active">Adresa</label>
                            <textarea :id="id + '2'" class="materialize-textarea" v-model="(detail.items[detail.items.findIndex(x => x.tag=='ADDR')] || {}).value"></textarea>
                        </div>
                    </div>
                </template>

                <template v-else-if="tag(detail.tag).field=='textarea'">
                    <label :for="id" :class="{active:detail.value}">{{tag(detail.tag).name}}</label>
                    <blockquote class="teal lighten-5">
                        <span v-html="parseHtml(detail.value)"></span>
                    </blockquote>
                    <textarea :id="id" class="materialize-textarea" v-model="detail.value" v-if="edit"></textarea>
                    <div class="right-align">
                        <a class="waves-effect waves-light btn" v-if="!edit" v-on:click="edit=true; focus(id);"><i class="material-icons left">edit</i>Upravit</a>
                        <a class="waves-effect waves-light btn" v-if="edit" v-on:click="edit=false"><i class="material-icons left">vertical_align_top</i>Sbalit</a>
                    </div>
                </template>

                <template v-else>
                    <div class="col s12">
                        <div class="input-field">
                            <label :for="id" :class="{active:detail.value}">{{tag(detail.tag).name}}</label>
                            <input :id="id" type="text" v-model="detail.value"/>
                        </div>
                    </div>
                    <personaldetails-list :items="detail.items" :mode="mode" :level="level + 1" v-if="!tag(detail.tag).collapseChildren"></personaldetails-list>
                </template>

            </div>

        </div>
    `,
    props: ["detail", "index", "mode", "level"],
    data: function() {
        return {
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            edit: false
        }
    },
    methods: {
        focus: function(id) {
            window.setTimeout(function() {
                document.getElementById(id).focus();
            }, 100)
        },
        parseHtml: function(html) {
            var temp = document.createElement("span");
            temp.innerHTML = html;
            temp.childNodes.forEach(function parseHtmlChild(node) {
                if (node.nodeType == 1) {
                    if (!["P", "BR", "SPAN", "B", "I", "U", "S", "OL", "UL", "LI"].includes(node.nodeName)) {
                        var p = document.createElement("P");
                        p.innerHTML = node.innerHTML;
                        node.parentNode.replaceChild(p, node);
                    }
                }
                if (node.style) {
                    Array.from(node.style).forEach(function(key, value) {
                        if (!["color", "background-color", "font-weight"].includes(key)) {
                            node.style[key] = null;
                        }
                    })
                }
                if (node.attributes) {
                    Array.from(node.attributes).forEach(function(key, value) {
                        if (!["style"].includes(key)) {
                            node[key] = null;
                        }
                    })
                }
                node.childNodes.forEach(parseHtmlChild);
            });
            return temp.innerHTML;
        },
        addItem: function() {
            this.detail.items.push({ 'level': this.detail.level + 1, 'tag': '', 'value': '', 'items': [] });
            var main = this.$parent;
            while (main.$options.name != "personaldetails") {
                main = main.$parent;
            }
            main.modalEditPersonalDetail = this.detail.items[this.detail.items.length - 1];
            var modal = M.Modal.init(document.querySelector("#modalEditPersonalDetail"), { "onCloseEnd": function() { M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn')); } });
            modal.open();
        },
        editItem: function() {
            var main = this.$parent;
            while (main.$options.name != "personaldetails") {
                main = main.$parent;
            }
            main.modalEditPersonalDetail = this.detail;
            var modal = M.Modal.init(document.querySelector("#modalEditPersonalDetail"), { "onCloseEnd": function() { M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn')); } });
            modal.open();
        },
        deleteItem: function() {
            if (window.confirm("Opravdu chcete tuto položku odstranit?")) {
                this.$parent.items.splice(this.index, 1);
            }
        },
        upItem: function() {
            var item = this.$parent.items.splice(this.index, 1);
            this.$parent.items.splice(this.index - 1, 0, item[0]);
        },
        downItem: function() {
            var item = this.$parent.items.splice(this.index, 1);
            this.$parent.items.splice(this.index + 1, 0, item[0]);
        },
        tag: function(tag) {
            // From tags.js
            return (tags[tag] || {
                name: tag,
                description: "",
                visible: false
            });
        }
    }
});
