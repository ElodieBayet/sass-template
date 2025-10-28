'use strict';
/**
 * @author Elodie Bayet
 *   @date 2020.04 > 2025.06
 */

/**
 * Solution to Auto-build W3C DOM nodes
 * * Build nodes side-by-side
 * * Build empty tags
 * * Build nodes inside others
 */
class DOMService {
    
    // cf. W3School : HTML Element Reference on 2021.03
    static _tagList = [
        'a','abbr','acronym','address','applet','area','article','aside','audio','b','base','basefont','bdi','bdo','big','blockquote','body',
        'br','button','canvas','caption','center','cite','code','col','colgroup','data','datalist','dd','del','details','dfn','dialog','dir','div','dl','dt',
        'em','embed','fieldset','figcaption','figure','font','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hr','html','i',
        'iframe','img','input','ins','kbd','label','legend','li','link','main','map','mark','meta','meter','nav','noframes','noscript','object','ol','optgroup',
        'option','output','p','param','picture','pre','progress','q','rp','rt','ruby','s','samp','script','section','select','small','source','span','strike',
        'strong','style','sub','summary','sup','svg','table','tbody','td','template','textarea','tfoot','th','thead','time','title','tr','track','tt','u','ul',
        'var','video','wbr'
    ];

    get tagList() {
        return DOMService._tagList;
    }

    /**
     * Determine if node content is Text
     * @param {(String|Object)} inner
     * @returns {Object}
     */
    static _nodeContent(inner) {
        if(typeof inner === 'string') {
            inner = document.createTextNode(inner);
        }
        return inner;
    }

    /**
     * Create instance of HTML Element
     * @param {string} node Node name to build, i.e. 'p'
     * @param {(string|Array|null)} content Content to insert into the node. A String for textContent ; An array for multiple DOM elements or Strings ; or null if nothing.
     * @param {(Object|null)} attributes Attributes to add. Object of keys as DOM property names, i.e. 'className:"my-class"'
     * @returns {Object} HTML Element
     */
    static nodeBuilder(node, content = null, attributes = null) {
        if (DOMService._tagList.indexOf(node) > -1) {
            // Build HTML Element
            node = document.createElement(node);
            // Add attributes
            if (null !== attributes) {
                for (let key in attributes) {
                    // [!] - 'key' must be attribute name as DOM property. I.e. for 'class' use 'className'
                    node[key] = attributes[key];
                }
            }
            // Add content
            if (null !== content) {
                if (Array.isArray(content)) {
                    content.forEach(insert => { 
                        node.appendChild(DOMService._nodeContent(insert));
                    });
                } else {
                    node.appendChild(DOMService._nodeContent(content));
                }
            }
            return node;
        } else {
            console.error( `Can't insert a non-existing node.`);
            return;
        }
    }
}

export default DOMService;