#ifdef GL_ES
    precision mediump float;
#endif

varying vec4 v_color_add;
varying vec4 v_color_tint;
varying vec2 v_texCoords;
uniform sampler2D u_texture;

void main() {
	vec4 color = texture2D(u_texture, v_texCoords);
	vec4 final_color = v_color_tint * color + v_color_add * color.a;
	gl_FragColor = vec4(1.0 - final_color.rgb, final_color.a);
}