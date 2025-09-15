from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, background_color, foreground_color, text):
    # Criar imagem base
    icon = Image.new('RGBA', (size, size), background_color)
    draw = ImageDraw.Draw(icon)
    
    # Tentar carregar uma fonte padrão
    try:
        font = ImageFont.truetype("arial.ttf", size // 3)
    except IOError:
        font = ImageFont.load_default()
    
    # Desenhar o símbolo da calculadora
    # Desenhar um retângulo como corpo da calculadora
    padding = size // 10
    draw.rectangle([padding, padding, size - padding, size - padding], 
                   outline=foreground_color, width=size // 30)
    
    # Desenhar alguns botões
    button_size = size // 8
    button_padding = size // 5
    button_positions = [
        (button_padding, button_padding * 2),
        (button_padding * 2, button_padding * 2),
        (button_padding * 3, button_padding * 2)
    ]
    
    for x, y in button_positions:
        draw.rectangle([x, y, x + button_size, y + button_size], 
                       fill=foreground_color)
    
    # Adicionar texto de identificação
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_position = ((size - text_bbox[2]) // 2, size - padding * 3)
    draw.text(text_position, text, font=font, fill=foreground_color)
    
    return icon

# Criar diretório de assets se não existir
os.makedirs('assets', exist_ok=True)

# Definir cores laranja
background_color = (255, 127, 0)  # Laranja vibrante
foreground_color = (255, 255, 255)  # Branco

# Gerar ícones em diferentes tamanhos
sizes = [1024, 512, 256, 192, 144, 96, 72, 48]
for size in sizes:
    # Ícone principal
    icon = create_icon(size, background_color, foreground_color, "Calc")
    icon.save(f'assets/icon-{size}.png')

# Gerar ícone adaptativo para Android
adaptive_icon = create_icon(1024, background_color, foreground_color, "Calc")
adaptive_icon.save('assets/adaptive-icon.png')

print("Ícones laranja gerados com sucesso na pasta assets!")
