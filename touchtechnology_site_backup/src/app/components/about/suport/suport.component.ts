import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-suport',
  templateUrl: './suport.component.html',
  styleUrl: './suport.component.css'
})
export class SuportComponent {
  supportForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.supportForm = this.fb.group({
      nome: ['', Validators.required],
      // celular: ['', [Validators.required, Validators.pattern(/^(\(\d{2}\)\s?)?\d{4,5}-\d{4}$/)]], // Padrão de celular (XX)XXXXX-XXXX
      celular: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      email: ['', [Validators.required, Validators.email]], // Email válido
      assunto: ['', Validators.required],
      mensagem: ['', [Validators.required, Validators.minLength(10)]], // Mínimo de 10 caracteres
    });
  }

  onSubmit() {
    if (this.supportForm.invalid) {
      alert("⚠️ Preencha os campos obrigatórios!");
      this.supportForm.markAllAsTouched(); // Exibe os erros nos campos
      return;
    }

    alert("✅ Mensagem enviada com sucesso!");
    this.supportForm.reset(); // Limpa o formulário após o envio
    // console.log('Formulário enviado com sucesso!', this.supportForm.value);
  }
}
