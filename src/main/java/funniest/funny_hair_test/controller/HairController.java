package funniest.funny_hair_test.controller;

import org.springframework.boot.autoconfigure.web.WebProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HairController {
    @GetMapping("hair")
    public String hello(Model model) {
        model.addAttribute("data","funny hair!!");
        return "hair";

    }
    @GetMapping("hair_template")
    public String helloMvc(@RequestParam(value = "name", required = false) String name, Model model) {
        model.addAttribute("name",name);
        return "hair_template";
    }
    @GetMapping("hello_String")
    @ResponseBody //http 헤드부와 바디부에서 바디부에 여기에 직접 데이터를 넣어주겠다.
    public String helloString(@RequestParam("name") String name) {
        return "hello" +name;
    }
    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name") String name) {
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
    }
    static class Hello {
        private String name;

        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
    }
}
