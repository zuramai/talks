---
# You can also start simply with 'default'
theme: seriph
# some information about your slides (markdown enabled)
title: Introduction to Rust Programming Language
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
layout: cover
background: https://cover.sli.dev

---



<div class="flex justify-center">
  <img src="/img/rust-logo.svg">
</div>

# Introduction to Rust Programming Language

Ahmad Saugi (2440078696)

<img src="/img/tfi.png" width="100">

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/zuramai/talks" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: section
---

# What is Rust?

A statically-typed language 


---
layout: statement
---

# #1 Most Loved Language

<div class="flex justify-center items-center flex-col mt-10">
<img src="/img/most-loved.png" width="500">
</div>


---
---

# Rust Features

<div class="grid grid-cols-2" mt-12 gap-10>
<div>

### ✅ Memory Safety

Manual memory management, no garbage collector
</div>
<div>

### ⚡️ Effective Compiler

More speed
</div>
<div>

### 🔥 Blazing Fast 

More speed, better satisfaction
</div>
<div>

### 📚 Libraries 

Vast range of libraries
</div>

</div>
---
transition: fade-out
---

# Who is Rust For?

- 📝 **Students** 

    Rust is for students and those who are interested in learning about systems concepts. Using Rust, many people have learned about topics like operating systems development.

- 📝 **Companies** 

    Hundreds of companies, large and small, use Rust in production for a variety of tasks.

- 📝 **Open Source Developers** 

    Rust is for people who want to build the Rust programming language, community, developer tools, and libraries.

- 📝 **People Who Value Speed and Stability** 

    Rust is fast. By speed, we mean both how quickly Rust code can run and the speed at which Rust lets you write programs.

---
layout: center
---

# What Do Businesses Use Rust For?

<div class="grid grid-cols-2 text-center" mt-12 gap-10>
<div>

### Operating Systems

</div>
<div>

### Kernel Programming

</div>
<div>

### Web Services

</div>
<div>

### Back-end Services

</div>
<div>

### Databases

</div>
<div>

### Gaming

</div>

</div>

---
---

---
---




# Cargo

A build system and package manager for Rust.

Cargo responsibility:
- Building your code
- Downloading the libraries your code depends on
- Updating and removing dependencies

---
---

# Rust Installation

We install Rust using `rustup`,  a tool to manage Rust versions.

You can install Rust by running this command on terminal:

```sh
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

🎉 Yay! Rust installed successfully in your machine!

---
layout: image-right
image: https://cover.sli.dev
---

# Hello World Rust

1. Open terminal
2. Create new Rust project. Run in terminal:
  
```
cargo init helloworld
```

3. Run the project

```
cd helloworld
cargo run
```

---
---

# Variables and Mutability

Consider this Rust code:
```rust
fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```

Will it run successfully?

---
---

# Variables and Mutability

.

<b>The answer is NO!</b>
It won't run.

In Rust, we need to write the mutable variable explicitly by adding `mut` keyword when creating a variable.

```rust {2}
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```

---
---

# Looping

There are several ways to make looping in Rust:

```rust 
// loop
let mut count = 1;
loop {
  println!("{count}");
  count += 1;
  if count == 5 {
    break;
  }
}
```

```rust 
// while loop
let mut count = 1;
while count <= 5 {
  println!("{count}");
  count += 1;
}
```

```rust 
// for loop
for count in 1..6 {
  println!("{count}");
}
```
---
---

# Match

Match is similar to `switch` in other programming languages.

```rust 
let number = 11;

println!("Tell me about {}", number);
match number {
    1 => println!("One!"),
    2 | 3 | 5 | 7 | 11 => println!("This is a prime"),
    13..=19 => println!("A teen"),
    _ => println!("Ain't special"),
}
// output: This is a prime

let boolean = true;
let binary = match boolean {
    false => println!("salah!"),
    true => println!("benar!"),
};
// output: benar!

```


---
---

# Guessing Game

Let's make a guessing game!

```rust
use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    loop {
        println!("Please input your guess.");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
```

---
layout: center
class: text-center
---

# Thank You

<PoweredBySlidev mt-10 />
